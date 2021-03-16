import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(
    private http: HttpClient,
  ) { }

  plan(token:string)
  {

    let headers = new HttpHeaders({
      'x-token': token });
    let options = { headers: headers };
    return this.http.post('https://rolimapp.com:3000/planes', {transaccion: 'consultarPlanes'}, options)
  }
}
