import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  habi: Habilidades = null;

  constructor(private sHabilidades: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.detail(id).subscribe(
      data => {
        this.habi = data;
      }, err =>{
        alert("Error al modificar habilidad2");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.update(id, this.habi).subscribe(
      data => {
        this.router.navigate([''])
        alert("Habilidad actualizada");
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate([''])
      }
    )
  }

}
