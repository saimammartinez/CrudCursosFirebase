import { Component, OnInit } from '@angular/core';
import{CursoService} from '../../service/curso.service';
import{CursoInterface} from '../../models/cursoInterface';
import{NgForm} from '@angular/forms/src/directives/ng_form';


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
    descripcion: ''
  };

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

  guardarCurso(myForm: NgForm){
    const fechaNow = Date.now();
    this.curso.fecha=fechaNow;
    this.cursoService.addCurso(this.curso);
  }

}
