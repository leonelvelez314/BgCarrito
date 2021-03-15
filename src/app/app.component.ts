import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Car', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'LogOut', url: '/folder/Favorites', icon: 'heart' }
  ];
  
  constructor() {}
}
