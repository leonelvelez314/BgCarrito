import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(

    private http:HttpClient
  ) { }

  productos()
  {
    this.http.post("https://rolimapp.com:3000/productos", {transaccion:'generico', tipo:'4'})
  }
}
