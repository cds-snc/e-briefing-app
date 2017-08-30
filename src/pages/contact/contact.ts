import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContactsProvider} from "../../providers/contacts/contacts";

@IonicPage()
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
})
export class ContactPage {

    public contact: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private contactsProvider: ContactsProvider) {
        this.loadContact();
    }

    loadContact() {
        this.contactsProvider.get(this.navParams.get('contact'))
            .then(data => {
                this.contact = data;
            });
    }

}
