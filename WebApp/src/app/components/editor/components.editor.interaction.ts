/**
 * Created by rafael on 26/04/17.
 */

import {Component, Input} from '@angular/core';
import {GameService} from './../../services/game.service';
import * as $ from 'jquery';
import 'jqueryui';

// TODO: Beacon id's are array indices
@Component({
    selector: 'interaction',
    template: `
    <div class="node condition">{{ interaction.condition.name }}</div>
    <div class="node action" *ngFor="let action of interaction.actions">{{ action.name }}</div>
    <div class="node-placeholder action" [attr.data-beacon-id]="beaconId" [attr.data-interaction-id]="interactionId">Drop Actions Here</div>
    `,
    styleUrls: ['app/components/editor/components.editor.interaction.css']
})
export class InteractionComponent {
    @Input() interaction: any;
    @Input() interactionId: any;
    @Input() beaconId: any;

    constructor(public game: GameService) {}

    ngOnInit() {
        // What happens when you drop an action under the condition
        $('.node-placeholder.action').droppable({
            drop: (e: any, component) => {
                console.log('dropped an action');

                let beaconId = e.target.getAttribute('data-beacon-id');
                let interactionId = e.target.getAttribute('data-interaction-id');

                // Add node to array
                this.game.addAction(beaconId, interactionId, component.draggable.text());

                // Reset node
                component.draggable.hide().css('top', 0).css('left', 0);
                component.draggable.fadeIn();
            }
        });
    }
}