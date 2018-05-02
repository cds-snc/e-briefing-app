import { ApiProvider } from './../api/api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsProvider {

    data: any;

    constructor(public http: Http, private api: ApiProvider) {
        this.data = null;
    }

    getEventsForDay = (day) => this.api.getJson('data/days${day}.json', this.data);
    
    get = (id) => this.api.getJson('data/events/${id}.json',this.data);

}
