import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventPage} from '@pages/event/event';
import {DaysProvider} from "@providers/days/days";

@Component({
    selector: 'page-day',
    templateUrl: 'day.html',
})
export class DayPage {

    public day: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private daysProvider: DaysProvider) {
        this.loadDay();
    }

    loadDay() {
        this.daysProvider.get(this.navParams.get('day'))
            .then(data => {
                this.day = data;
            });
    }

    setEvent(id) {
        this.navCtrl.push(EventPage, {
            event: id
        });
    }
}
