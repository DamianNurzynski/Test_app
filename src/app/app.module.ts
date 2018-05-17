import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {GlobalService, LoaderService} from './core/services';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {LoaderComponent} from './shared/loader/loader.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './core/factories';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent
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
  providers: [GlobalService, LoaderService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

