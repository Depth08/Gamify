/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'editor-pane',
    template: `
<div class="pane clearfix">
    <beacon></beacon>

    
    <div style="cursor: pointer" (click)="addBeacon()" class="add-container">
        <p class="add-button">+</p>
        <p>Add new beacon</p>
    </div>
</div>
`,
    styleUrls: ['app/components/editor/components.editor.editorpane.css']
})
export class EditorPaneComponent {


    addBeacon() {
        console.log('beacon added');
    }
}