/**
 * Created by rafael on 18/04/17.
 */

import {Component, OnInit} from '@angular/core';
import {GameService} from './../../services/game.service';
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
        <div class="node condition" *ngFor="let condition of game.getConditions()" >{{ condition.name }}</div>
        <div class="node-placeholder condition">Drop Conditions Here</div>
    </div>
    `,
    styleUrls: ['app/components/editor/components.editor.beacon.css']
})
export class BeaconComponent {
    constructor(public game: GameService) {
        console.log(game);
    }
    
    ngOnInit() {
        $('.node-placeholder.condition').droppable({
            drop: (e, component) => {
                // Add node to array
                this.game.getConditions().push({
                    id: 0,
                    name: component.draggable.text()
                });

                // Reset node
                component.draggable.hide().css('top', 0).css('left', 0);
                component.draggable.fadeIn();
            }
        });
    }
}