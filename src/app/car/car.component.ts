import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  public data = new Array<Producto>();
  public total : number = 0;
  constructor(
    private stora: Storage
  ) { 


    this.stora.get('prodSeleccionados').then(respuesa =>{
      this.data = respuesa;
      this.data.forEach((re:Producto)=>{
        this.total = this.total  + Number(re.precio) * re.cantidad;
      })
    })
  }

  ngOnInit() {}

  setImage(url)
  {
  
    
    return 'assets/'+url;
  }

  changeProduct(event, valor, cantidad)
  {
    
    if(event.target.checked)
    {
      this.sumarTotal(valor*cantidad);
    }else{
      this.restarTotal(valor*cantidad);
    }
    
  }

  sumarCantidad($event, id)
  {
    this.data.forEach(val =>{
          if(val.id === id)
          {
            if(val.check)
            {
              val.cantidad = val.cantidad + 1;
              this.sumarTotal(Number(val.precio))
            }
            

          }
          
    })
  }

  restarCantidad($event, id)
  {
    this.data.forEach(val =>{
      if(val.id === id)
      {
        if(val.cantidad > 1)
        {
          if(val.check)
          {
            val.cantidad = val.cantidad - 1;
            this.restarTotal(Number(val.precio))
          }
          
        }
        
      }      
  })
  }
  sumarTotal(val:number)
  {
    this.total = this.total + Number(val);

  }

  restarTotal(val:number)
  {
    this.total = this.total - Number(val);

  }
  


}
