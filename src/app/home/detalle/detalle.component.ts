import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductoResponse } from 'src/app/model/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { Storage } from '@ionic/storage';

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
  public permiteAgg = true;

  constructor(
    private rout:Router,
    private productSer: ProductosService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
  ) { 
    this.data = new Array<Producto>();
    let id :number =  Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.productSer.productos().subscribe(async (resProdu:ProductoResponse) =>{     
           
      this.data = resProdu.data;
      
      
      this.dataObjet = this.data.find(x=>x.id === id)

      
      this.precio = this.dataObjet.precio;
      this.descripcion = this.dataObjet.detalle;
      
      this.imagen = "assets/"+this.dataObjet.imagen;
      this.isAdd().then((x:boolean)=>{
        this.permiteAgg = !x;
        
        
      });
      
      
      
      
    })

  }

  ngOnInit() {}

  onBack(
    
  )
  {
    this.rout.navigateByUrl("home")
  }

  
  isAdd()
  {
    return new Promise((resolve, reject)=>{
      this.storage.get('prodSeleccionados').then((listaProdu:Producto[]) =>{
        let listaProduAux = new Array<Producto>();
        listaProduAux = listaProdu;
        if(listaProduAux !== null)
        {
          if(listaProduAux.filter(x=>x.id === this.dataObjet.id).length === 0)
          {
            resolve(false) ;
          }else{
            resolve(true);
          }
        }else{
          resolve(false);
        }
       
      })  
    })
    
  }

  addToCar()
  {
    this.storage.get('prodSeleccionados').then((listaProdu:Producto[]) =>{
        let listaProduAux = listaProdu;
        if(listaProduAux === null)
        {
          listaProduAux = new Array<Producto>();          
        }

        listaProduAux.push(this.dataObjet);
        this.storage.set('prodSeleccionados', listaProduAux)
        this.rout.navigateByUrl('home'); 
        
        
    })
    
  }

}
