import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TripProvider} from "../trip/trip";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {Zip} from "@ionic-native/zip";
import {GlobalsProvider} from "../globals/globals";


@Injectable()
export class SyncProvider {

    url: any;

    constructor(public http: Http, private tripProvider: TripProvider, private transfer: FileTransfer, private zip: Zip, private globals: GlobalsProvider) {
        this.tripProvider.getUpdateUrl()
            .then(data => {
                this.url = data;
            });
    }

    syncData() {
        return new Promise(resolve => {
            const fileTransfer: FileTransferObject = this.transfer.create();

            fileTransfer.download(this.url, this.globals.dataDirectory + 'package.zip')
                .then((entry) => {

                    this.zip.unzip(this.globals.dataDirectory + 'package.zip', this.globals.dataDirectory + 'data')
                        .then((result) => {

                            if (result === 0) console.log('SUCCESS extracted files to: ' + this.globals.dataDirectory);
                            if (result === -1) console.log('FAILED');

                            window.location.reload();
                        });
                })
        })
    }
}
