import {Component} from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
  <nav class="clearfix">
    <div class="container">
        <a routerLink="/home"><h1 class="logo">Gamify</h1></a>
        <a routerLink="/home" class="menu-item" routerLinkActive="active">Home</a>
        <a routerLink="/games" class="menu-item" routerLinkActive="active">Games</a>
        <a routerLink="/login" class="menu-item right" routerLinkActive="active">Login</a>
        <a routerLink="/register" class="menu-item right" routerLinkActive="active">Register</a>
    </div>

  </nav>
  <router-outlet></router-outlet>
  <doormat></doormat>
`,
})
export class AppComponent {
}