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
  constructor(
    private stora: Storage
  ) { 


    this.stora.get('prodSeleccionados').then(respuesa =>{
      this.data = respuesa;
    })
  }

  ngOnInit() {}

  setImage(url)
  {
  
    
    return 'assets/'+url;
  }


}
