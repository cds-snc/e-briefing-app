import { FileReaderProvider } from '@providers/fileReader/fileReader';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsProvider {

    data: any;

    constructor(public http: Http, private fileReader: FileReaderProvider) {
        this.data = null;
    }

    getEventsForDay = (day) => this.fileReader.getJson(`data/days${day}.json`, this.data);
    
    get = (id) => this.fileReader.getJson(`data/events/${id}.json`,this.data);

}
