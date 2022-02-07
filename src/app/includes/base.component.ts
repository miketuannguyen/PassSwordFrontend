import { Injectable } from '@angular/core';
import { constants, helpers } from '../utils';

@Injectable({
    providedIn: 'root',
})
export class BaseComponent {
    public readonly CONSTANTS = constants.CONSTANTS;
    public readonly ROUTES = constants.ROUTES;
    public readonly helpers = helpers;
}
