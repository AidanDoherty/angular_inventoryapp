import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]
})
export class AppComponent {
  title = 'inventory-app';
  authenticated:boolean =false;
  user:Observable<firebase.User>


  constructor(private afs: AngularFirestore, public af: AngularFireAuth){
    this.af.authState.subscribe(
      (auth) =>{
        if (auth !=null){
          this.user =this.af.authState;
          this.authenticated = true;
        }
      }
    )
  }
}
