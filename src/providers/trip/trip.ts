import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { FileReaderProvider } from '@providers/fileReader/fileReader';


@Injectable()
export class TripProvider {

    data: any;

    constructor(public http: Http, private fileReader: FileReaderProvider) {
        this.data = null;
    }

    get() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return this.fileReader.getJson('data/trip.json',this.data);
    }
}
