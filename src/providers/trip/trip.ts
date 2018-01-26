import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalsProvider} from "../globals/globals";


@Injectable()
export class TripProvider {

    data: any;

    constructor(public http: Http, private globals: GlobalsProvider) {
        this.data = null;
    }

    get() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.globals.dataDirectory + 'data/trip.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        })
    }
}
