/**
 * Created by Rafael on 4/04/2017.
 */
import { Component } from '@angular/core';
import { User } from './../models/user';
import { AuthService } from './../services/auth.service';

@Component ({
    selector: 'login-page',
    providers: [AuthService],
    template: `
<section class="login-card">
    <h1>Login</h1>
    <h1 class="logo">Gamify</h1>
    <small>
        New to Gamify? <strong>You can register an account <a routerLink="/register">here</a></strong>. Never share your password and account details with anyone. In the event of authentication problems, don't contact us. Then you're basically screwed.
    </small>
    
    <form>
        <input name="email" [(ngModel)]="user.email" type="text" placeholder="example@gamify.com">
        <input name="password" [(ngModel)]="user.password" type="password">
    </form>
    
    <button type="button" (click)="login()" class="button bg-red">Login</button>
</section>`,
    styleUrls: ['app/pages/pages.login.css']
})
export class LoginComponent {
    public user: any = {};

    constructor(private auth: AuthService) {
        this.user = new User();
    }

    login(): void {
        this.auth.login(this.user.email, this.user.password);
    }
}