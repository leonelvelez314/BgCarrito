import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarios } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public usuario:string ="";
  public password:string = "";
  constructor(
    private loginServices:LoginService,
    private router: Router

  ) { }

  ngOnInit() {

  }

  onLogin()
  {
    let request: DatosUsuarios = new DatosUsuarios();
    request.email = this.usuario;
    request.password = this.password;

    
    this.loginServices.login(request).subscribe(respuesta =>{
      console.log(respuesta);
      this.router.navigateByUrl("home")
    }, error=>{
      console.log(error);
    })
    
    
  }

  onChangeUsuario(event){
    this.usuario = event.target.value;    
  }

  onChangePassword(event){
    this.password = event.target.value;    
  }

}
