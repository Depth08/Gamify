/**
 * Created by rafael on 18/04/17.
 */

import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui';

@Component({
    selector: 'beacon',
    template: `
    <div class="header">
        <img class="beacon-icon" src="./img/beacon_outline.svg" />
        <h1>Beacon 1</h1>
        <p>Beacon in the bedroom</p>
    </div>
    <div class="nodes">
        <div class="node-placeholder condition">Drop Conditions Here</div>
    </div>
    `,
    styleUrls: ['app/components/editor/components.editor.beacon.css']
})
export class BeaconComponent {
    ngOnInit() {
        $('.node-placeholder.condition').droppable({
            drop: this.drop
        });
    }
    
    drop(e, ui): void {
        console.log(ui);
    }
}