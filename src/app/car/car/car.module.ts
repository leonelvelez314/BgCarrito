import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CarModule { }
