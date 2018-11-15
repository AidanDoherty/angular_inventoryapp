import { Component, OnInit } from '@angular/core';
import {AfService } from '../providers/af.service'
import { Observable } from 'rxjs';
import {AngularFireAuth} from "angularfire2/auth";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated:boolean = false;
   constructor(public AfService: AfService,
  private afAuth: AngularFireAuth, private auth: AuthService, private myRoute : Router) { 
    this.afAuth.authState.subscribe(
      (auth) =>{
        if (auth !=null){
          this.user =this.afAuth.authState;
          this.authenticated = true;
        }
      }
    )
 }


  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  login(){
    this.AfService.loginWithGoogle();
  }
  logout(){
    this.AfService.logout();
    window.location.reload();
  }

isLoggedIn:boolean;

userLoggedIn():boolean{
  this.isLoggedIn = this.auth.isLoggedIn();
  return this.isLoggedIn
}
OnLogout(){
  this.auth.doLogout();
  this.isLoggedIn = this.auth.isLoggedIn();
  this.myRoute.navigate(["login"]);
  
}


}
