import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SyncProvider} from "../../providers/sync/sync";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private syncProvider: SyncProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }

  syncData() {
    this.syncProvider.syncData()
        .then(data => {
          console.log("Huzzah");
        });
  }
}
