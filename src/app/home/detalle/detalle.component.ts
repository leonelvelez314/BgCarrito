import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductoResponse } from 'src/app/model/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  public data : Producto[];
  public dataObjet :Producto = new Producto();
  public precio:string = "";
  public descripcion:string = "";
  public imagen = "";

  constructor(
    private rout:Router,
    private productSer: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.data = new Array<Producto>();
    let id :number =  Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.productSer.productos().subscribe((resProdu:ProductoResponse) =>{     
           
      this.data = resProdu.data;
      
      
      this.dataObjet = this.data.find(x=>x.id === id)

      
      this.precio = this.dataObjet.precio;
      this.descripcion = this.dataObjet.detalle;
      
      this.imagen = "assets/"+this.dataObjet.imagen;
      
    })

  }

  ngOnInit() {}

  onBack(
    
  )
  {
    this.rout.navigateByUrl("home")
  }

}
