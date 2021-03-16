import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Producto, ProductoResponse } from '../model/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private storage: Storage,
    private productSer: ProductosService
    ) {

      this.storage.get("token").then(res =>{
        this.productSer.productos().subscribe((resProdu:ProductoResponse) =>{
          
        })
      })
      
     }

  ngOnInit() {

  }

  onDetalle()
  {
    
    this.router.navigateByUrl("home/detalle");
  }

}
