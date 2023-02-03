import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nuevaexperiencia',
  templateUrl: './nuevaexperiencia.component.html',
  styleUrls: ['./nuevaexperiencia.component.css']
})
export class NuevaexperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  empresaE: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.empresaE);
    this.sExperiencia.save(expe).subscribe(
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
