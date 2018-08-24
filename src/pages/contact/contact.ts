import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ContactsProvider} from "@providers/contacts/contacts";
import {GlobalsProvider} from "@providers/globals/globals";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
})
export class ContactPage {

    public contact: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private contactsProvider: ContactsProvider, public globals: GlobalsProvider) {
        this.loadContact();
    }

    loadContact() {
        this.contactsProvider.get(this.navParams.get('contact'))
            .then(data => {
                this.contact = data;
            });
    }

}
