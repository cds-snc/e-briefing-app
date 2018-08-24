import { FileReaderProvider } from '@providers/fileReader/fileReader';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentsProvider {

    data: any;

    constructor(public http: Http, private fileReader: FileReaderProvider) {
        this.data = null;
    }

    all() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return this.fileReader.getJson('data/documents.json', this.data);

    }

    get = (id) => this.fileReader.getJson(`data/documents/${id}.json`, this.data);

}
