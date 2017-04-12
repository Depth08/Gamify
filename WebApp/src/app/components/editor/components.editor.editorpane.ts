/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'editor-pane',
    template: `
<div class="pane clearfix">
    <div class="ruleset">
        <div class="header">
            <img class="beacon-icon" src="./img/beacon_outline.svg" />
            <h1>Beacon 1</h1>
            <p>Beacon in the bedroom</p>
        </div>
        <div class="nodes">
            <div class="condition node">Node 1</div>
            <div class="action node">Node 2</div>
        </div>
    </div>
    <div class="add-container">
        <p class="add-button">+</p>
        <p>Add new beacon</p>
    </div>
</div>
`,
    styleUrls: ['app/components/editor/components.editor.editorpane.css']
})
export class EditorPaneComponent { }