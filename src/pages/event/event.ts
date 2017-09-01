import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events";

@Component({
    selector: 'page-event',
    templateUrl: 'event.html',
})
export class EventPage {

    public event: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider) {
        this.loadEvent();
    }

    loadEvent() {
        this.eventsProvider.get(this.navParams.get('event'))
            .then(data => {
                this.event = data;
            });
    }

    showDocument(id) {
        console.log(id);
    }
}
