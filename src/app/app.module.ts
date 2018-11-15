import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AfService } from './providers/af.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { SignupComponent } from './signup/signup.component';
import {DisplayClipartComponent} from './display-clipart/display-clipart.component'
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, 
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  
} from '@angular/material'
import {AuthGuard} from './service/auth.guard';



library.add(faStar);
// import { ConvertToSpaces } from './convert-to-space.pipe';
const routes: Routes = [ { path: "", redirectTo: 'login', pathMatch: 'full',canActivate: [AuthGuard] },
 { path: 'product-list', component: ProductListComponent,canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent,canActivate: [AuthGuard] },
   { path: 'home', component: ProductListComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }, 
    { path: 'signup', component: SignupComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    StarRatingComponent,
    NavBarComponent,
    SignupComponent,
    LoginComponent,
    DisplayClipartComponent,
    
    
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatCardModule, 
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
     MatToolbarModule,
   // AngularFireAuth,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AfService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
} 

