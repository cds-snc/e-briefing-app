import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TripProvider} from "../trip/trip";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
import {Zip} from "@ionic-native/zip";


@Injectable()
export class SyncProvider {

    url: any;

    constructor(public http: Http, private tripProvider: TripProvider, private transfer: FileTransfer, private file: File, private zip: Zip) {
        this.tripProvider.getUpdateUrl()
            .then(data => {
                this.url = data;
            });
    }

    syncData() {
        return new Promise(resolve => {
            console.log("Sync Provider " + this.url);

            const fileTransfer: FileTransferObject = this.transfer.create();

            fileTransfer.download(this.url, this.file.dataDirectory + 'package.zip')
                .then((entry) => {
                    // console.log('downloaded: ' + entry.toURL());
                    // console.log(this.file.dataDirectory);
                    // console.log(this.file.listDir(this.file.dataDirectory, ''));
                    /* this.file.listDir(this.file.dataDirectory, '').then((files) => {
                        console.log(files)
                    }); */

                    console.log('now unzipping');

                    this.zip.unzip(this.file.dataDirectory + 'package.zip', this.file.dataDirectory + 'data')
                        .then((result) => {
                            // this.file.listDir(this.file.dataDirectory, 'data').then((files) => { console.log(files); });

                            if (result === 0) console.log('SUCCESS');
                            if (result === -1) console.log('FAILED');

                            window.location.reload();
                        });
                })


        })
    }

}
