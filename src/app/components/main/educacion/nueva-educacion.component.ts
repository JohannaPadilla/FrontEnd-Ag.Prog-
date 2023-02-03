import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreEd: string = "";
  tituloEd: string = "";

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educ = new Educacion(this.nombreEd, this.tituloEd);
    this.sEducacion.save(educ).subscribe(
      data => {
        alert("Educacion creada");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate([''])
      }
    )
  }

}
