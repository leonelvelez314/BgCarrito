import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  constructor(
    private stora: Storage
  ) { 


    this.stora.get('prodSeleccionados').then(respuesa =>{
      console.log(respuesa);
    })
  }

  ngOnInit() {}

}
