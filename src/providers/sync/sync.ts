import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {Zip} from "@ionic-native/zip";
import {GlobalsProvider} from "@providers/globals/globals";


@Injectable()
export class SyncProvider {

    constructor(public http: Http, private transfer: FileTransfer, private zip: Zip, private globals: GlobalsProvider) {
    }

    syncData() {
        return new Promise(resolve => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            let update_url = this.globals.api_url + '/trips/' + this.globals.trip_id + '/download';

            // let options:
            fileTransfer.download(update_url, this.globals.dataDirectory + 'package.zip', false, { headers: { "Authorization": 'Bearer ' + this.globals.api_key }})
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
