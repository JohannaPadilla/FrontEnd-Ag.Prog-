import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../model/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  curURL = 'https://backendjcp.onrender.com/curs/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cursos[]>{
    return this.httpClient.get<Cursos[]>(this.curURL + 'lista');
  }

  public detail(id: number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.curURL + `detail/${id}`);
  }

  public save(cursos: Cursos): Observable<any>{
    return this.httpClient.post<any>(this.curURL + 'create', cursos);
  }

  public update(id: number, cursos: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.curURL + `update/${id}`, cursos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.curURL + `delete/${id}`);
  }
}
