/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
    selector: 'editor-pane',
    template: `
<div class="pane clearfix">
    <beacon *ngFor="let beacon of game.getBeacons(), let i = index" [beacon]="beacon" [beaconId]="i"></beacon>

    <div style="cursor: pointer" (click)="addBeacon()" class="add-container">
        <p class="add-button">+</p>
        <p>Add new beacon</p>
    </div>
</div>
`,
    styleUrls: ['app/components/editor/components.editor.editorpane.css']
})
export class EditorPaneComponent {
    constructor(private game: GameService) {

    }

    addBeacon() {
        this.game.addBeacon();
    }
}