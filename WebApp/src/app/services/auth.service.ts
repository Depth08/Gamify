/**
 * Created by Rafael on 4/04/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private authToken: string;
    private URL: string = 'http://webandmobile.sennevancauwenberge.ikdoeict.net/api/account/login';

    constructor(private http: Http) {
        let token = JSON.parse(localStorage.getItem('auth_token'));

        this.authToken = token || "";
    }

    login(email: string, password: string): Boolean {
        console.log('Login', email, password);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        let body = JSON.stringify({
            email: email,
            password: password
        });

        this.http.post(this.URL, body, { headers: headers } )
        .map((response: Response) => {
            var validResponse;

            console.log(response);

            try {
                validResponse = response.json();

                localStorage.setItem('auth_token', validResponse.token);
            }
            catch(e) {
                console.log("Error parsing JSON on login", e);
            }
        });
    }

    logout(): void {
        this.authToken = '';
        localStorage.removeItem('auth_token');
    }
}

