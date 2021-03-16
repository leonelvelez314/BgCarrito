import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Plan, PlanResponse } from '../model/plan';
import { Producto } from '../model/producto';
import { PlanService } from '../services/plan.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  public data = new Array<Producto>();
  public total : number = 0;
  public allItemsChecks= false;
  constructor(
    private stora: Storage,
    private plan: PlanService 
    
     ) { 


    this.stora.get('prodSeleccionados').then(respuesa =>{
      this.data = respuesa;
      console.log(this.data)
      
    })
  }

  ngOnInit() {}

  ngOnDestroy()
  {
    this.stora.set('prodSeleccionados', this.data);
  }

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

  setChecks()
  {
    let val = this.data.filter(x=>x.check).length === this.data.length? 'close' : 'checkbox';
    if(val === 'close')
    {
      this.allItemsChecks = true;
    }else{
      this.allItemsChecks = false;

    }
    
    return val;
  }

  checkAll()
  {
    if(this.allItemsChecks)
    {
      this.data.forEach(x=>{
        x.check = false;
      })
    }else{
      this.data.forEach(x=>{
        x.check = true;
      })
    }
  }

  takekAll()
  {
    this.data.forEach(a=>{
      if(a.check)
      {
        this.restarTotal(Number(a.precio) * a.cantidad)
      }
      
    });
    this.data = this.data.filter(x=>!x.check)
    
  }

  async comprar()
  {
    let token:string = await this.stora.get('token');
    this.plan.plan(token).subscribe((respuestaPlan:PlanResponse)=>{
      this.stora.get('plan').then(resPlan=>{
        console.log(resPlan)
        
        let objetoPlan = respuestaPlan.retorno.find(x=>x.plan === Number(resPlan));
        
      })
      
    })
  }

}
