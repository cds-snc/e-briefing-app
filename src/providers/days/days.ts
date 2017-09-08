import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DaysProvider {

    data: any;

    constructor(public http: Http) {
        this.data = null;
    }

    all() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('data/days.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data.days;
                    resolve(this.data);
                });
        })
    }

    get(id) {
        return new Promise(resolve => {
            this.http.get('data/days/' + id + '.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        })
    }

}
