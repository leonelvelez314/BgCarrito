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

  public data : Producto[];
  constructor(private router: Router,
    private storage: Storage,
    
    private productSer: ProductosService
    ) {
      this.data = new Array<Producto>();
      this.storage.get("token").then(res =>{
        this.productSer.productos().subscribe((resProdu:ProductoResponse) =>{
          
          this.data = resProdu.data;
          console.log(this.data)
        })
      })
      
     }

  ngOnInit() {

  }

  onDetalle()
  {
    
    this.router.navigateByUrl("home/detalle");
  }

  setImage(url)
  {
    return 'assets/'+url;
  }

}
