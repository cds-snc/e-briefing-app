import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DaysProvider} from '../../providers/days/days';
import {DayPage} from '../day/day';
import {SyncProvider} from "../../providers/sync/sync";

@Component({
    selector: 'page-days',
    templateUrl: 'days.html',
    providers: [DaysProvider]
})
export class DaysPage {

    public days: any;

    constructor(public navCtrl: NavController, private daysProvider: DaysProvider, private syncProvider: SyncProvider) {
        console.log("days constructor");
        this.loadDays();
    }

    loadDays() {
        console.log("load days");
        this.daysProvider.all()
            .then(data => {
                this.days = data;
            });
    }

    goToDayPage(id) {
        this.navCtrl.push(DayPage, {
            day: id
        });
    }

    syncData() {
        this.syncProvider.syncData()
            .then(data => {
                console.log("Huzzah");
            });
    }
}
