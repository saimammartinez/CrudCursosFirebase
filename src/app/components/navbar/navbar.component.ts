import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = true;
  constructor() { }

  ngOnInit() {
  }

  onLogin(event) {
  //   AngularFireAuthModule.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
     this.logged = true;
   }
  onLogout(event) {
    this.logged = false;
  }

  onSignup(event) {
    console.log('SignUp');
  }

}
