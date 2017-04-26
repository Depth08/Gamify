/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'tool-drawer',
    template: `
    <div class="tooldrawer">
        <h2>Conditions</h2>
        <ul class="conditions node-container">
            <condition-node class="condition">Far</condition-node>
            <condition-node class="condition">Near</condition-node>
            <condition-node class="condition">Touching</condition-node>
        </ul>
        <h2>Actions</h2>
        <ul class="actions node-container">
            <action-node class="action">Vibrate</action-node>
            <action-node class="action">Text</action-node>
            <action-node class="action">Pickup</action-node>
        </ul>
    </div>
`,
    styleUrls:  ['app/components/editor/components.editor.tooldrawer.css']
})
export class ToolDrawerComponent {

}