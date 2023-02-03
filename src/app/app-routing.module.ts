import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPersonaComponent } from './components/header/editar-persona.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarAcercaComponent } from './components/main/acerca-de-mi/editar-acerca.component';
import { EditarCursoComponent } from './components/main/cursos/editar-curso.component';
import { NuevoCursoComponent } from './components/main/cursos/nuevo-curso.component';
import { EditarEducacionComponent } from './components/main/educacion/editar-educacion.component';
import { EducacionComponent } from './components/main/educacion/educacion.component';
import { NuevaEducacionComponent } from './components/main/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/main/experiencia/editar-experiencia.component';
import { NuevaexperienciaComponent } from './components/main/experiencia/nuevaexperiencia.component';
import { EditarHabilidadComponent } from './components/main/habilidades/editar-habilidad.component';
import { NuevaHabilidadComponent } from './components/main/habilidades/nueva-habilidad.component';
import { EditarProyectoComponent } from './components/main/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/main/proyectos/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaexperienciaComponent},
  {path:'editarexp/:id', component: EditarExperienciaComponent},
  {path:'editaracer/:id', component: EditarAcercaComponent},
  {path:'editareduc/:id', component: EditarEducacionComponent},
  {path:'nuevaedu', component: NuevaEducacionComponent},
  {path:'nuevocur', component: NuevoCursoComponent},
  {path:'editarcur/:id', component: EditarCursoComponent},
  {path:'nuevahab', component: NuevaHabilidadComponent},
  {path:'editarhab/:id', component: EditarHabilidadComponent},
  {path:'nuevopro', component: NuevoProyectoComponent},
  {path:'editarpro/:id', component: EditarProyectoComponent},
  {path:'editarper/:id', component: EditarPersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
