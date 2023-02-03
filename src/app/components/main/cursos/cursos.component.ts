import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curs: Cursos[] = [];

  constructor( private sCursos: CursosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarExperiencia():void{
  this.sCursos.lista().subscribe(data => {this.curs = data;})
  }

  delete(id? : number){
    if(id != undefined){
      this.sCursos.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Experiencia laborar borrada exitosamente")
        }, err => {
          alert("No se pudo borrar la experiencia")
        }
      )
    }
  }

}
