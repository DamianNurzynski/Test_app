import {Injector, APP_INITIALIZER} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCATION_INITIALIZED} from '@angular/common';

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const browserLang = translate.getBrowserLang();

      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('pl');
      translate.use(browserLang.match(/en|pl/) ? browserLang : 'pl').subscribe(() => {
        console.log(`Successfully initialized 'pl' language.`);
      }, err => {
        console.error(`Problem with  language initialization.'${err}`);
      }, () => {
        resolve(null);
      });
    });
  });
}
