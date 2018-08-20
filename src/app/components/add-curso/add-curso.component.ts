import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../service/curso.service';
import { CursoInterface } from '../../models/cursoInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
  curso: CursoInterface = {
    nombre: '',
    formador: '',
    precio: '',
    idioma: '',
    tecnologia: '',
    fecha: '',
    descripcion: '',
    url: '',
  };

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

  onGuardarCurso(myForm: NgForm) {
    if (myForm.valid === true) {
      const fechaNow = Date.now();
      this.curso.fecha = fechaNow;
      this.cursoService.addCurso(this.curso);
      myForm.resetForm();
    } else {
      console.log('No se ha podido validar el formulario');
    }

  }


}
