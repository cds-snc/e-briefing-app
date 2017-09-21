import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DaysProvider} from '../../providers/days/days';
import {DayPage} from '../day/day';
import {SyncPage} from "../sync/sync";

@Component({
    selector: 'page-days',
    templateUrl: 'days.html'
})
export class DaysPage {

    public days: any;

    constructor(private platform: Platform, public navCtrl: NavController, private daysProvider: DaysProvider) {
        // load first page data only after platform available otherwise
        // we won't be able to access file.dataDirectory in globals
        this.platform.ready().then(() => {
            this.loadDays();
        });
    }

    loadDays() {
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

    goToSyncPage() {
        this.navCtrl.push(SyncPage);
    }
}
