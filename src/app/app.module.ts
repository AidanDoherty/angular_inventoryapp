import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

library.add(faStar);
//import { ConvertToSpaces } from './convert-to-space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    StarRatingComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule,
    //ConvertToSpaces
    RouterModule.forRoot([
      { path: 'productlist', component: ProductListComponent },
      { path: 'newproduct', component: AddProductComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }