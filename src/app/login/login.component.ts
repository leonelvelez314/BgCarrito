import { Component, OnInit } from '@angular/core';
import { DatosUsuarios } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public usuario:string;
  public password:string;
  constructor(
    private loginServices:LoginService

  ) { }

  ngOnInit() {

  }

  onLogin()
  {
    let request: DatosUsuarios = new DatosUsuarios();
    request.email = "danielsilvaorrego@gmail.com";
    request.password = "89e495e7941cf9e40e6980d14a16bf023ccd4c91";
    this.loginServices.login(request).subscribe(respuesta =>{
      console.log(respuesta);
    }, error=>{
      console.log(error);
    })
    
  }

}
