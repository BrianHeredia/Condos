import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuarios';
import { Grupo } from '../models/grupos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usuariosUrl = 'http://localhost:3000/api/usuarios';  // URL to web api
  private gruposUrl = 'http://localhost:3000/api/grupo';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
  }

  getUsuario(cedula: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${cedula}`;
    return this.http.get<Usuario>(url);
  }

  addUsuario (usuario: Usuario): Observable<Usuario> {
    const body = JSON.stringify(usuario);
    return this.http.post<Usuario>(this.usuariosUrl, body, httpOptions);
  }

  deleteUsuario (usuario: Usuario | number): Observable<Usuario> {
    const cedula = typeof usuario === 'number' ? usuario : usuario.cedula;
    const url = `${this.usuariosUrl}/${cedula}`;

    return this.http.delete<Usuario>(url, httpOptions);
  }

  updateUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, httpOptions);
  }

  addGrupo (grupo: Grupo): Observable<Grupo> {
    const body = JSON.stringify(grupo);
    return this.http.post<Grupo>(this.gruposUrl, body, httpOptions);
  }

  getGrupos (): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.gruposUrl)
  }
}
