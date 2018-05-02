import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiProvider } from '@providers/api/api';


@Injectable()
export class TripProvider {

    data: any;

    constructor(public http: Http, private api: ApiProvider) {
        this.data = null;
    }

    get() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return this.api.getJson('data/trip.json',this.data);
    }
}
