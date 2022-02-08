import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseValidator } from '../includes/base.validator';

export class LoginValidator extends BaseValidator {
    /** Constructor */
    constructor(private _translate: TranslateService) {
        super();
    }

    /**
	 * Build form group
	 */
    public buildForm() {
        return new FormGroup({
            username: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required
            ]),
            remember_me: new FormControl(false)
        });
    }

    /**
	 * Get error messages based on rules of form controls
 	 */
    public getErrorMessages() {
        return {
            username: {
                required: this._translate.instant('validation.required', {
                    field: this._translate.instant('label.username') as string
                }) as string
            },
            password: {
                required: this._translate.instant('validation.required', {
                    field: this._translate.instant('label.password') as string
                }) as string
            },
        };
    }
}
