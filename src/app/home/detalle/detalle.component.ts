import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(
    private rout:Router
  ) { }

  ngOnInit() {}

  onBack(
    
  )
  {
    this.rout.navigateByUrl("home")
  }

}
