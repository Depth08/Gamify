import {Component} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-container',
    providers: [AuthService],
    template: `
  <nav class="clearfix">
    <div class="container">
        <a routerLink="/home"><h1 class="logo">Gamify</h1></a>
        <a routerLink="/home" class="menu-item" routerLinkActive="active">Home</a>
        <a routerLink="/games" class="menu-item" routerLinkActive="active">Games</a>
        <a routerLink="/login" *ngIf="!this.auth.isLoggedIn()" class="menu-item right" routerLinkActive="active">Login</a>
        <a routerLink="/home" *ngIf="this.auth.isLoggedIn()" (click)="this.auth.logout()" class="menu-item right">Logout</a>
        <a routerLink="/register" class="menu-item right" routerLinkActive="active">Register</a>
    </div>

  </nav>
  <router-outlet></router-outlet>
  <doormat></doormat>
`,
})
export class AppComponent {
    constructor(private auth: AuthService) {

    }
}