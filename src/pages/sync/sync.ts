import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, Platform, AlertController} from 'ionic-angular';
import {SyncProvider} from "@providers/sync/sync";

/**
 * Generated class for the SyncPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-sync',
    templateUrl: 'sync.html',
})
export class SyncPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private syncProvider: SyncProvider, public loadingCtrl: LoadingController, private platform: Platform, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SyncPage');
    }

    syncData() {

        let loader = this.loadingCtrl.create({
            content: "Attempting to sync data... if the application does not refresh after this message disappears, there may have been a network issue",
            duration: 5000
        });
        loader.present();

        this.syncProvider.syncData()
            .then(data => {
                loader.dismiss();
            });
    }

    checkBrowser(loader) {
        if (!this.platform.is('ios')) {
            loader.dismiss();
            let alert = this.alertCtrl.create({
                title: 'Unable to sync',
                subTitle: 'Cannot sync when in browser',
                buttons: ['Ok']
            });
            alert.present();
        }
    }
}
