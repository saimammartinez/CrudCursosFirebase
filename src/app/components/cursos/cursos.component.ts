import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/cursoInterface';
import { CursoService } from '../../service/curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursoService:CursoService) { }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(cursos => {
      console.log(cursos);
    })
  }

}
