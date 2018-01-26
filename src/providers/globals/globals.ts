import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";


@Injectable()
export class GlobalsProvider {

    dataDirectory: string = '';
    api_key: string = 'API_KEY';
    trip_id: any = 'TRIP_ID';
    api_url: string = 'https://ebrief.cds-snc.ca/api';

    constructor(public http: Http, private platform: Platform, private file: File) {
        platform.ready().then(() => {
            // if we're on a device, use the app-writable data directory
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