import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventsProvider} from "@providers/events/events";
import {ContactPage} from "@pages/contact/contact";
import {DocumentsProvider} from "@providers/documents/documents";
import {DocumentViewer} from "@ionic-native/document-viewer";
import {GlobalsProvider} from "@providers/globals/globals";

@Component({
    selector: 'page-event',
    templateUrl: 'event.html',
})
export class EventPage {

    public event: any;
    public selected_document: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider, private documentsProvider: DocumentsProvider, private document: DocumentViewer, private globals: GlobalsProvider) {
        this.loadEvent();
    }

    loadEvent() {
        this.eventsProvider.get(this.navParams.get('event'))
            .then(data => {
                this.event = data;
            });
    }

    showDocument(id) {
        var options = {
            title: 'PDF'
        }

        this.documentsProvider.get(id)
            .then(data => {
                this.selected_document = data;
                this.document.viewDocument(this.globals.dataDirectory + 'data/assets/' + this.selected_document.file, 'application/pdf', options);
            });
    }

    showPerson(id) {
        this.navCtrl.push(ContactPage, {
            contact: id
        });
    }
}
