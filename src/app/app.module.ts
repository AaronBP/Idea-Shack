import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Favourites } from '../pages/favourites/favourites';
import { Library } from '../pages/library/library';
import { Ideas } from '../pages/ideas/ideas';
import { Idea } from '../pages/idea/idea';
import { Settings } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { IdeasService } from "../services/ideas";
import { SettingsService } from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    Favourites,
    Library,
    Ideas,
    Idea,
    Settings,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favourites,
    Library,
    Ideas,
    Idea,
    Settings,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IdeasService,
    SettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
