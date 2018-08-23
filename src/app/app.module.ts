import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { CursoService } from './service/curso.service';

import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AddCursoComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'CRUD-Cursos'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
