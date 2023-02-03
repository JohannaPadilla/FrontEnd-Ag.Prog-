import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  educ: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data => {
        this.educ = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educ).subscribe(
      data => {
        this.router.navigate([''])
        alert("Educacion actualizada");
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate([''])
      }
    )
  }
}
