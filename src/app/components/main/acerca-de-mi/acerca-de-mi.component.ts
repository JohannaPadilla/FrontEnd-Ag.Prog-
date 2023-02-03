import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';
import { TokenService } from 'src/app/service/token.service';
// import { ACERCA } from '../../mock-acerca';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  acer: Acerca[] = [];

  constructor(private sAcerca: AcercaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarAcerca();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    }

    cargarAcerca():void{
      this.sAcerca.lista().subscribe(data => {this.acer = data;})
    }

}
