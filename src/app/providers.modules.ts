import { ApiProvider } from './../providers/api/api';
import { NgModule, ModuleWithProviders } from '@angular/core';
 
import {DaysProvider} from '../providers/days/days';
import {EventsProvider} from '../providers/events/events';
import {DocumentsProvider} from '../providers/documents/documents';
import {ArticlesProvider} from '../providers/articles/articles';
import { TripProvider } from '../providers/trip/trip';
import { SyncProvider } from '../providers/sync/sync';
import { GlobalsProvider } from '../providers/globals/globals';
import {ContactsProvider} from '../providers/contacts/contacts';

@NgModule({ })

export class ProvidersModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: ProvidersModule,
            providers:[
                ApiProvider,
                ArticlesProvider,
                ContactsProvider,
                DaysProvider,
                DocumentsProvider,
                EventsProvider,
                GlobalsProvider,
                TripProvider,
                SyncProvider,
            ]
        }
    }
}