import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AcercaDeMiComponent } from './components/main/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './components/main/experiencia/experiencia.component';
import { EducacionComponent } from './components/main/educacion/educacion.component';
import { CursosComponent } from './components/main/cursos/cursos.component';
import { HabilidadesComponent } from './components/main/habilidades/habilidades.component';
import { ProyectosComponent } from './components/main/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
