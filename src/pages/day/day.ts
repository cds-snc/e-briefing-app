import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DayProvider } from '../../providers/day/day';
import { EventPage } from '../../pages/event/event';

/**
 * Generated class for the DayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day',
  templateUrl: 'day.html',
})
export class DayPage {

  public events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dayProvider: DayProvider) {
    this.loadDay();
  }

  loadDay() {
    this.dayProvider.load(this.navParams.get('day'))
        .then(data => {
          this.events = data['events'];
        });
  }

  setEvent(id) {
      this.navCtrl.push(EventPage, {
          event: id
      });
  }
}
