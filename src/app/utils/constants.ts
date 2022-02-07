import { deepFreeze } from './helpers';

/** Application constants */
const CONSTANTS = {
    DEFAULT_LANG: 'en',
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
