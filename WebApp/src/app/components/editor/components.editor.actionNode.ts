/**
 * Created by rafael on 26/04/17.
 */

import {Component, OnInit, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import 'jqueryui';

@Component({
    selector: 'action-node',
    template: `
    <ng-content></ng-content>
    `,
    styleUrls: ['app/components/editor/components.editor.node.css']
})
export class ActionNodeComponent implements OnInit {
    private isDragged = false;

    constructor(private elem: ElementRef) {

    }

    ngOnInit() {
        $(this.elem.nativeElement).draggable({
            revert: 'invalid',
            start: function() {
                $('.node-placeholder.action').slideDown(200);
            },
            stop: function() {
                $('.node-placeholder.action').slideUp(200);
            }
        });
    }
}