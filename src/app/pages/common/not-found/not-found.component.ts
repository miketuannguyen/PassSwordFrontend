import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/includes/base.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent extends BaseComponent {
    /** Constructor */
    constructor() {
        super();
    }
}
