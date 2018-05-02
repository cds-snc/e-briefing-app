import { ProvidersModule } from './providers.modules';
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from '@angular/http';
import {MyApp} from '@app/app.component';


import {ArticlePage} from "@pages/article/article";
import {ArticlesPage} from '@pages/articles/articles';
import {ContactsPage} from '@pages/contacts/contacts';
import {DocumentsPage} from '@pages/documents/documents';
import {DaysPage} from '@pages/days/days';
import {DayPage} from '@pages/day/day';
import {EventPage} from '@pages/event/event';
import {TabsPage} from '@pages/tabs/tabs';
import {ContactPage} from "@pages/contact/contact";
import {SyncPage} from "@pages/sync/sync";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DocumentViewer} from '@ionic-native/document-viewer';
import {FileTransfer} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {Zip} from "@ionic-native/zip";
import {Network} from "@ionic-native/network";


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
        IonicModule.forRoot(MyApp),
        ProvidersModule.forRoot(),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
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
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DocumentViewer,
        FileTransfer,
        File,
        Zip,
        Network,
    ]
})
export class AppModule {
}
