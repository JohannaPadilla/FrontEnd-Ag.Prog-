import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proy: Proyectos = null;

  constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(
      data => {
        this.proy = data;
      }, err =>{
        alert("Error al modificar proyecto2");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proy).subscribe(
      data => {
        this.router.navigate([''])
        alert("Proyecto actualizada");
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate([''])
      }
    )
  }
}
