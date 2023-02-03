import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {
  institucionC: string = ''; 
  cursoC: string = '';
  infoC: string = '';
  enlaceC: string = '';

  constructor(private sCursos: CursosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const curs = new Cursos(this.institucionC, this.cursoC, this.infoC, this.enlaceC);
    this.sCursos.save(curs).subscribe(
      data => {
        alert("Experiencia creada");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate([''])
      }
    )
  }


}
