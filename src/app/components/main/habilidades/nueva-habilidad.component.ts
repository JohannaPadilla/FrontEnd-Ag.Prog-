import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  nombreH: string = '';
  nivelH: string = '';

  constructor(private sHabilidades: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habi = new Habilidades(this.nombreH, this.nivelH);
    this.sHabilidades.save(habi).subscribe(
      data => {
        alert("Habilidad creada");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate([''])
      }
    )
  }

}
