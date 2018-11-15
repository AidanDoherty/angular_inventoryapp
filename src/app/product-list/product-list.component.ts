import { Component, OnInit } from '@angular/core';
import { load } from '@angular/core/src/render3/instructions';
import { ProductService } from '../shared/product.service';
import { IProduct } from '../shared/IProduct';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
    filteredProducts: IProduct[];
    products: IProduct[];
    pageTitle: string = "Aidans Stuff for sale";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: any;

    constructor(private _productService: ProductService) {
        this.filteredProducts = this.products;
    }
    //listFilter:string = "";

    _listFiler: string;
    get listFilter(): string {
        return this._listFiler
    }
    set listFilter(value: string) {
        this._listFiler = value
        this.filteredProducts = this.listFilter ? this.preformFilter(this.listFilter) : this.products;
    }

    preformFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


    public ngOnInit(): void {
        this._productService.getProducts().subscribe(products => {
            this.products = products,
                this.filteredProducts = this.products;
        },
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        console.log('boom')
    }
    deleteProduct(id:string): void {
        this._productService.deleteProduct(id);
    }
}