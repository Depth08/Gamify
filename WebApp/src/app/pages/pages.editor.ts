/**
 * Created by Rafael on 12/04/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'editor-page',
    template: `
    <div class="editor relative">
        <tool-drawer></tool-drawer> 
        <editor-pane></editor-pane>
    </div>
`,
    styleUrls: ['app/pages/pages.editor.css']
})
export class EditorComponent { }