import { ApiProvider } from './../api/api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentsProvider {

    data: any;

    constructor(public http: Http, private api: ApiProvider) {
        this.data = null;
    }

    all() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return this.api.getJson('data/documents.json', this.data);

    }

    get = (id) => this.api.getJson('data/documents/${id}.json', this.data);

}
