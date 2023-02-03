import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaexperienciaComponent } from './components/main/experiencia/nuevaexperiencia.component';
import { EditarExperienciaComponent } from './components/main/experiencia/editar-experiencia.component';
import { EditarAcercaComponent } from './components/main/acerca-de-mi/editar-acerca.component';
import { EditarEducacionComponent } from './components/main/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/main/educacion/nueva-educacion.component';
import { NuevoCursoComponent } from './components/main/cursos/nuevo-curso.component';
import { EditarCursoComponent } from './components/main/cursos/editar-curso.component';
import { NuevaHabilidadComponent } from './components/main/habilidades/nueva-habilidad.component';
import { EditarHabilidadComponent } from './components/main/habilidades/editar-habilidad.component';
import { EditarProyectoComponent } from './components/main/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/main/proyectos/nuevo-proyecto.component';
import { EditarPersonaComponent } from './components/header/editar-persona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaexperienciaComponent,
    EditarExperienciaComponent,
    EditarAcercaComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    NuevoCursoComponent,
    EditarCursoComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent,
    EditarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
