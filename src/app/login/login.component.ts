import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarios, LoginClassResponse } from '../model/login';
import { LoginService } from '../services/login.service';
import { Storage } from '@ionic/storage';

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
    private router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {

  }

  onLogin()
  {
    let request: DatosUsuarios = new DatosUsuarios();
    request.email = this.usuario;
    request.password = this.password;

    
    this.loginServices.login(request).subscribe((respuesta:LoginClassResponse) =>{
      let respuestaLogin : LoginClassResponse  = respuesta;
      if(respuestaLogin.codigoRetorno === "0001")
      {
        this.storage.set("token", respuestaLogin.token)
        this.router.navigateByUrl("home")
      }
      console.log(respuestaLogin)
      
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
