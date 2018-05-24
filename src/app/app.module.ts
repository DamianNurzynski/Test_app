import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';

import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GlobalService, LoaderService} from './core/services';
import {appInitializerFactory, HttpLoaderFactory} from './core/factories';
import {FooterComponent} from './shared';
import {HeaderComponent} from './shared';
import {LoaderComponent} from './shared';
import { LanguageTranslatePipe } from './core/pipes/language-translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LanguageTranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [GlobalService, LoaderService, {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [TranslateService, Injector],
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
}

