import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxSoundmanager2Module } from 'ngx-soundmanager2';
import { AppComponent } from './app.component';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSoundmanager2Module.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    }),
    NotifierModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
