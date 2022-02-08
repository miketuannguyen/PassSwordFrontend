import { deepFreeze } from './helpers';

/** Application constants */
const CONSTANTS = {
    DEFAULT_LANG: 'en',
    /** CSS class name of error messages */
    ERROR_MESSAGE_CLASS_NAME: 'error-message',
};
deepFreeze(CONSTANTS);

/** Application routes */
const ROUTES = {
    DASHBOARD: '',
    AUTH: {
        MODULE: 'auth',
        LOGIN: 'login',
    },
};
deepFreeze(ROUTES);

export { CONSTANTS, ROUTES };
