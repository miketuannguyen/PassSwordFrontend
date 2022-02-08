import { FormGroup } from '@angular/forms';
import * as jQuery from 'jquery';
import { constants, helpers } from '../utils';

export class BaseValidator {
    /**
     * Clear error messages being displayed on UI
     */
    private _clearErrorMessages() {
        jQuery(`.${constants.CONSTANTS.ERROR_MESSAGE_CLASS_NAME}`).remove();
    }

    /**
     * Show error message under the control by appending the message to the parent
     * @param controlName - name of the control
     * @param errMsg - error message of the control
     */
    private _showErrorMsgUnderControl(controlName: string, errMsg: string) {
        if (helpers.isBlank(controlName) || helpers.isBlank(errMsg)) return;

        const inputEle = jQuery(`[formcontrolname="${controlName}"]`);
        if (inputEle.length <= 0) return;

        const parent = inputEle.parent();
        const errMsgHTML = `<p class="${constants.CONSTANTS.ERROR_MESSAGE_CLASS_NAME}">${errMsg}</p>`;
        parent.append(errMsgHTML);
    }

    /**
     * Show error messages of form controls
     * @param form - the form group containing all controls
     * @param errorMessages - error messages corresponding to rules of controls
     */
    public showErrorsOfControls(form: FormGroup, errorMessages: { [key: string]: { [key: string]: string } }) {
        this._clearErrorMessages();

        Object.keys(form.controls).forEach((controlName) => {
            const control = form.get(controlName);
            if (!control || !control.invalid || !control.errors) return;

            const errMessagesOfControls = errorMessages[controlName];
            if (!errMessagesOfControls) return;

            const errMsg = helpers.getFirstValueOfObj(errMessagesOfControls);
            if (!errMsg) return;

            this._showErrorMsgUnderControl(controlName, errMsg);
        });
    }
}
