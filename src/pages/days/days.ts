import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DaysProvider} from '../../providers/days/days';
import {DayPage} from '../../pages/day/day';

@Component({
    selector: 'page-days',
    templateUrl: 'days.html',
    providers: [DaysProvider]
})
export class DaysPage {

    public days: any;

    constructor(public navCtrl: NavController, private daysProvider: DaysProvider) {
        this.loadDays();
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

}
