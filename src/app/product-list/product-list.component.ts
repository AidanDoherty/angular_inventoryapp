import { Component, OnInit } from '@angular/core';
import { load } from '@angular/core/src/render3/instructions';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent 

implements OnInit  {
 constructor(private _productService:ProductService){
 this.filteredProducts = this.products;
    }
pageTitle:string = "Aidans Stuff for sale";
imageWidth:number = 50;
imageMargin:number = 2;
showImage:boolean = true;
//listFilter:string = "";

_listFiler : string;
get listFilter():string{
    return this._listFiler
}
set listFilter(value : string){
     this._listFiler = value
     this.filteredProducts = this.listFilter ? this.preformFilter(this.listFilter) : this.products;
}

preformFilter(filterBy:string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct )=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


public ngOnInit(): void{
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
}
filteredProducts: IProduct[];
products: IProduct[] = [
  
];
toggleImage():void{
this.showImage = !this.showImage;
console.log('boom')
}
}
 



export interface IProduct{
productId:number;
 productName:string;
 productCode:string;
 releaseDate:string;
 description:string;
 price:number;
 starRating:number;
 imageUrl:string;
}


 
  




