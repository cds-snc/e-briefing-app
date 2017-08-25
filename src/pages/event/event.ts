import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  public event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventProvider: EventProvider) {
    this.loadEvent();
  }

  loadEvent() {
    this.eventProvider.load(this.navParams.get('event'))
        .then(data => {
          this.event = data;
          console.log(this.event);
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
