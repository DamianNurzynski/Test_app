import {Injector} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCATION_INITIALIZED} from '@angular/common';


export function appInitializerFactory(translate: TranslateService, injector: Injector) {
    return () => new Promise<any>((resolve: any) => {
        const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

        locationInitialized.then(() => {
            const choosedLanguage = window.sessionStorage['language'];
            const browserLang = translate.getBrowserLang();
            const language = choosedLanguage
                ? choosedLanguage
                : browserLang.match(/en|pl/)
                    ? browserLang
                    : 'pl';

            if (!choosedLanguage) {
                window.sessionStorage['language'] = language;
            }

            translate.addLangs(['en', 'pl']);
            // translate.setDefaultLang('pl');
            translate.use(language).subscribe(() => {
                console.log(`Successfully initialized 'pl' language.`);
            }, err => {
                console.error(`Problem with  language initialization.'${err}`);
            }, () => {
                resolve(null);
            });
        });
    });
}
