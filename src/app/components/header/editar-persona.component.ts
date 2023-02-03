import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  pers: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private sPersona: PersonaService, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.pers = data;
      }, err =>{
        alert("Error al modificar perfil");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.pers.img = this.imageService.url
    this.sPersona.update(id, this.pers).subscribe(
      data => {
        this.router.navigate([''])
        alert("Perfil actualizado");
      }, err =>{
        alert("Error al modificar perfil");
        this.router.navigate([''])
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
