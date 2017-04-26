/**
 * Created by rafael on 18/04/17.
 */

import {Component, Input} from '@angular/core';
import {GameService} from './../../services/game.service';
import * as $ from 'jquery';
import 'jqueryui';

// TODO: Beacon id's are array indices
@Component({
    selector: 'beacon',
    template: `
    <div class="header">
        <img class="beacon-icon" src="./img/beacon_outline.svg" />
        <h1>Beacon {{ beaconId + 1 }}</h1>
        <p>{{ beacon.name }}</p>
    </div>
    <div class="nodes">
        <interaction class="interaction" *ngFor="let interaction of beacon.interactions, let interactionId = index" [beaconId]="beaconId" [interaction]="interaction" [interactionId]="interactionId" ></interaction>
        <div class="node-placeholder condition" [attr.data-beacon-id]="beaconId">Drop Conditions Here</div>
    </div>
    `,
    styleUrls: ['app/components/editor/components.editor.beacon.css']
})
export class BeaconComponent {
    @Input() beaconId: any;
    @Input() beacon: any;

    constructor(public game: GameService) {}
    
    ngOnInit() {
        // What happens when you drop a condition under a beacon
        $('.node-placeholder.condition').droppable({
            drop: (e: any, component) => {
                let beaconId = e.target.getAttribute('data-beacon-id');

                // Add node to array
                this.game.addInteraction(beaconId, component.draggable.text());

                // Reset node
                component.draggable.hide().css('top', 0).css('left', 0);
                component.draggable.fadeIn();
            }
        });
    }
}