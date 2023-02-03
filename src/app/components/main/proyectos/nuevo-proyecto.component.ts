import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router, public imageService: ImageService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proy = new Proyectos(this.nombreP, this.descripcionP, this.imgP);
    this.sProyectos.save(proy).subscribe(
      data => {
        alert("Proyecto creado");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate([''])
      }
    )
  }
}
