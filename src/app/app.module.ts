import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { CursoService } from './service/curso.service';

import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AddCursoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'CRUD-Cursos'),
    AngularFirestoreModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
