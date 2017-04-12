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
            <li>Far</li>
            <li>Near</li>
            <li>Touching</li>
        </ul>
        <h2>Actions</h2>
        <ul class="actions node-container">
            <li>Vibrate</li>
            <li>Text</li>
            <li>Pickup</li>
        </ul>
    </div>
`,
    styleUrls:  ['app/components/editor/components.editor.tooldrawer.css']
})
export class ToolDrawerComponent {

}