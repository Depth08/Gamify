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
            <node class="condition">Far</node>
            <node class="condition">Near</node>
            <node class="condition">Touching</node>
        </ul>
        <h2>Actions</h2>
        <ul class="actions node-container">
            <node class="action">Vibrate</node>
            <node class="action">Text</node>
            <node class="action">Pickup</node>
        </ul>
    </div>
`,
    styleUrls:  ['app/components/editor/components.editor.tooldrawer.css']
})
export class ToolDrawerComponent {

}