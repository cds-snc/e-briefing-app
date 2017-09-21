import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from '@angular/http';
import {MyApp} from './app.component';

import {ArticlesPage} from '../pages/articles/articles';
import {ContactsPage} from '../pages/contacts/contacts';
import {DocumentsPage} from '../pages/documents/documents';
import {DaysPage} from '../pages/days/days';
import {DayPage} from '../pages/day/day';
import {EventPage} from '../pages/event/event';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DaysProvider} from '../providers/days/days';
import {EventsProvider} from '../providers/events/events';
import {DocumentsProvider} from '../providers/documents/documents';
import {ArticlesProvider} from '../providers/articles/articles';
import {ArticlePage} from "../pages/article/article";
import {ContactsProvider} from '../providers/contacts/contacts';
import {ContactPage} from "../pages/contact/contact";
import {DocumentViewer} from '@ionic-native/document-viewer';
import {FileTransfer} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {Zip} from "@ionic-native/zip";
import { TripProvider } from '../providers/trip/trip';
import { SyncProvider } from '../providers/sync/sync';
import { GlobalsProvider } from '../providers/globals/globals';
import {SyncPage} from "../pages/sync/sync";

@NgModule({
    declarations: [
        MyApp,
        ArticlePage,
        ArticlesPage,
        ContactsPage,
        DocumentsPage,
        DaysPage,
        DayPage,
        TabsPage,
        EventPage,
        ContactPage,
        SyncPage
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
        TabsPage,
        ArticlePage,
        ContactPage,
        SyncPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DaysProvider,
        EventsProvider,
        DocumentsProvider,
        ArticlesProvider,
        ContactsProvider,
        DocumentViewer,
        FileTransfer,
        File,
        TripProvider,
        SyncProvider,
        Zip,
        GlobalsProvider
    ]
})
export class AppModule {
}
