import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { ArticlesPage } from '../pages/articles/articles';
import { ContactsPage } from '../pages/contacts/contacts';
import { DocumentsPage } from '../pages/documents/documents';
import { DaysPage } from '../pages/days/days';
import { DayPage } from '../pages/day/day';
import { EventPage } from '../pages/event/event';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DaysProvider } from '../providers/days/days';
import { DayProvider } from '../providers/day/day';
import { EventsProvider } from '../providers/events/events';
import { EventProvider } from '../providers/event/event';
import { DocumentsProvider } from '../providers/documents/documents';

@NgModule({
  declarations: [
    MyApp,
    ArticlesPage,
    ContactsPage,
    DocumentsPage,
    DaysPage,
    DayPage,
    TabsPage,
    EventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArticlesPage,
    ContactsPage,
    DocumentsPage,
    DaysPage,
    DayPage,
    EventPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DaysProvider,
    DayProvider,
    EventsProvider,
    EventProvider,
    DocumentsProvider
  ]
})
export class AppModule {}
