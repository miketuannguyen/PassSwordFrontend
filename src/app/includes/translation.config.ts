import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';
import { constants } from '../utils';

/**
 * Factory to load language JSON file in `assets` for translation
 * @param http - HTTP client to load the file
 */
export const HttpLoaderFactory = (httpClient: HttpClient) => {
    const timestamp = Date.now();
    //add timestamp query to avoid browser caching
    return new TranslateHttpLoader(httpClient, './assets/i18n/', `.json?v=${timestamp}`);
};

/**
 * Factory provides configurations when application initialize
 * @param translate - set default language as `en`
 */
export const AppInitFactory = (translate: TranslateService) => (async () => {
    const defaultLang = constants.CONSTANTS.DEFAULT_LANG;
    translate.setDefaultLang(defaultLang);
    const observable = translate.use(defaultLang);
    await firstValueFrom(observable);
});
