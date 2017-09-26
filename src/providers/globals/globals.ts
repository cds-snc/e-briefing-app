import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";


@Injectable()
export class GlobalsProvider {

    dataDirectory: any;

    constructor(public http: Http, private platform: Platform, private file: File) {
        this.dataDirectory = '';

        platform.ready().then(() => {
            // this.getDataDirectory();
            if (!this.platform.is('core')) {
                this.setDataDirectory(this.file.dataDirectory ? this.file.dataDirectory : '');
            }
        })
    }

    setDataDirectory(value) {
        this.dataDirectory = value;
    }

    getDataDirectory() {
        return this.dataDirectory;
    }
}