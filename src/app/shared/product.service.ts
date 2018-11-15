import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from './IProduct';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()

export class ProductService {


    private _productUrl = 'http://localhost:3000/products';

    productsCollection: AngularFirestoreCollection<IProduct>;

    products: Observable<IProduct[]>;

    allProducts: IProduct[];
    errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
       this.productsCollection = _afs.collection<IProduct>('products');
       
  }

  getProducts(): Observable<IProduct[]> {
      
          this.products = this.productsCollection.snapshotChanges().pipe(
              map(actions=> actions.map(a => {
                  const data = a.payload.doc.data() as IProduct;
                  const id = a.payload.doc.id;
                  return { id, ...data};
              }))
          );
      return this.products;
  }
  addProduct(product: IProduct): void {
      this.productsCollection.add(product);
  }

  deleteProduct(id:string): void
  {
this.productsCollection.doc(id).delete()
.catch(error => {console.log("delete product error" + error); })
.then(() => console.log('deleteProduct: id =' + id));
  }
 
      

  }
      



