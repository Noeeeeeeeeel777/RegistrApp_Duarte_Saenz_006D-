import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users, IUsers } from '../pages/interfaces/interface';
import { Books } from '../pages/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  CrearUsuario(newUser:IUsers):Observable<IUsers>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/docente`, newUser);
  }

  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/docente`);
  }

  GetUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/docente/?correo=${codigo}`);
  }

  MostrarLibros():Observable<Books>{
    return this.httpclient.get<Books>(`${environment.apiUrl}/libros`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }
}
