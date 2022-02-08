import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/app/includes/base.component';
import { LoginValidator } from 'src/app/validators/login.validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {
    public validator = new LoginValidator(this._translate);
    public form = new FormGroup({});

    /** Constructor */
    constructor(
		private _translate: TranslateService
    ) {
        super();
        this.form = this.validator.buildForm();
    }

    /**
	 * On user submit form
	 */
    public onSubmit() {
        this.validator.showErrorsOfControls(this.form, this.validator.getErrorMessages());
        if (this.form.invalid) return;
    }
}
