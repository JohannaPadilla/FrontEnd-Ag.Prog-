import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-editar-acerca',
  templateUrl: './editar-acerca.component.html',
  styleUrls: ['./editar-acerca.component.css']
})
export class EditarAcercaComponent implements OnInit {
  aceInf: Acerca = null;

  constructor(private sAcerca: AcercaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcerca.detail(id).subscribe(
      data => {
        this.aceInf = data;
      }, err =>{
        alert("Error al modificar acerca de mi2");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAcerca.update(id, this.aceInf).subscribe(
      data => {
        this.router.navigate([''])
        alert("Experiencia actualizada");
      }, err =>{
        alert("Error al modificar acerca de mi");
        this.router.navigate([''])
      }
    )
  }

}
