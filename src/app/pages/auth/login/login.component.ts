import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/includes/base.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {
    /** Constructor */
    constructor() {
        super();
    }
}
