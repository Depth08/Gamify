/**
 * Created by Rafael on 4/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'doormat',
    template: `
        <div class="doormat">
            <div class="container">
                <h1 class="logo">Gamify</h1>
                <h3>A school project proudly presented by</h3>
                <p class="signature">Senne & Rafaël</p>
            </div>

        </div>
        <footer>
            <div class="container">
                <p class="credits">Gamify is not really a product lol. All rights prepared as a tasty panini. &copy; Odisee Gent 2017</p>
            </div>
        </footer>
    `,
    styleUrls: ['app/components/doormat.css']
})
export class DoormatComponent { }