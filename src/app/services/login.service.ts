import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosUsuarios, LoginClass} from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) {


   }

   login(usuario:DatosUsuarios)
   {
     let request: LoginClass = new LoginClass();
     request.datosUsuario = usuario;
    return this.http.post('https://rolimapp.com:3000/',request);
   }
}
