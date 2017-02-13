import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Response } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NicknameComponentPipe } from './nickname-component.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NicknameComponentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
