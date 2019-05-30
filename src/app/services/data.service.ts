import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuarios';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usuariosUrl = 'http://localhost:8080/usuarios';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }

  addUsuario (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, usuario, httpOptions);
  }

  deleteUsuario (usuario: Usuario | number): Observable<Usuario> {
    const uid = typeof usuario === 'number' ? usuario : usuario.uid;
    const url = `${this.usuariosUrl}/${uid}`;

    return this.http.delete<Usuario>(url, httpOptions);
  }

  updateUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, httpOptions);
  }
}
