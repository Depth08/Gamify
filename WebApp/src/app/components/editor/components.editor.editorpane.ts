/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'editor-pane',
    template: `
<div class="pane clearfix">
    <beacon *ngFor="let beacon of beacons"></beacon>

    
    <div style="cursor: pointer" (click)="addBeacon()" class="add-container">
        <p class="add-button">+</p>
        <p>Add new beacon</p>
    </div>
</div>
`,
    styleUrls: ['app/components/editor/components.editor.editorpane.css']
})
export class EditorPaneComponent {
    private beacons = [{
        id: 0
    }];

    addBeacon() {
        console.log('beacon added');

        this.beacons.push({
            id:0
        })
    }
}