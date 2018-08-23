import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = false;
  constructor() { }

  ngOnInit() {
  }

  onLogin(event) {
    this.logged = true;
  }
  onLogout(event) {
    this.logged = false;
  }

  onSignup(event) {
    console.log('SignUp');
  }

}
