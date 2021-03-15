import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Car', url: '/car', icon: 'paper-plane' },
    { title: 'LogOut', url: '/login', icon: 'log-out' }
  ];
  
  constructor() {}
}
