import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  public events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventsProvider: EventsProvider) {
    this.loadEvents();
  }

  loadEvents() {
    this.eventsProvider.getEventsForDay(this.navParams.get('day'))
        .then(data => {
          this.events = data['events'];
        });
  }
}
