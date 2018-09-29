import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
//import { ConvertToSpaces } from './convert-to-space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ConvertToSpaces
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
