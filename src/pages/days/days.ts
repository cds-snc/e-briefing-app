import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DaysProvider} from '../../providers/days/days';
import {TripProvider} from "../../providers/trip/trip";
import {DayPage} from '../day/day';
import {SyncPage} from "../sync/sync";

@Component({
    selector: 'page-days',
    templateUrl: 'days.html'
})
export class DaysPage {

    public days: any;
    public trip: any;

    constructor(private platform: Platform, public navCtrl: NavController, private daysProvider: DaysProvider, private tripProvider: TripProvider) {
        // load first page data only after platform available otherwise
        // we won't be able to access file.dataDirectory in globals
        this.platform.ready().then(() => {
            this.loadDays();
            this.loadTrip();
        });
    }

    loadDays() {
        this.daysProvider.all()
            .then(data => {
                this.days = data;
            });
    }

    loadTrip() {
        this.tripProvider.get() 
            .then (data => {
                this.trip = data;
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
