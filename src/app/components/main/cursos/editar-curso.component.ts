import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  curs: Cursos = null;

  constructor(private sCursos: CursosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sCursos.detail(id).subscribe(
      data => {
        this.curs = data;
      }, err =>{
        alert("Error al modificar Curso2");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sCursos.update(id, this.curs).subscribe(
      data => {
        this.router.navigate([''])
        alert("Curso actualizada");
      }, err =>{
        alert("Error al modificar Curso");
        this.router.navigate([''])
      }
    )
  }
}
