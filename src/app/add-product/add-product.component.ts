import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../shared/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _productService :ProductService,private router: Router) { }
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  showDisplayClipartComponent:boolean;
  
  ngOnInit() {
  }

  addProduct(){
    let product:IProduct = {
      productId:this.productId,
      productName:this.productName,
      productCode:this.productCode,
      releaseDate:this.releaseDate,
      description:this.description,
      price:this.price,
      starRating:this.starRating,
      imageUrl:this.imageUrl

     
    }
    this._productService.addProduct(product);
    alert("Congrats. Your item: " + this.productName + " has been added for sale.");
    this.router.navigate(['product-list']); 
  }

  showHideDisplayClipartComponent():boolean{
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
    return false;
  }
  addImageStringToFormTextBox(evt):boolean{
    this.imageUrl = evt;
    console.log(this.imageUrl)
    return false;
  }
}
