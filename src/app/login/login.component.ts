import { Component, OnInit, Pipe } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  form;
  constructor(private fb: FormBuilder, private myRoute: Router,
    private auth: AuthService, public afAuth: AngularFireAuth) {
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  ngOnInit() { }

  login() {
    this.auth.doLogin(this.form.value)
      .then(res => {
        this.myRoute.navigate(['product-list']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }
  doGoogleLogin() {
    this.auth.doGoogleLogin().
      then(res => {
        this.myRoute.navigate(['product-list']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }
}