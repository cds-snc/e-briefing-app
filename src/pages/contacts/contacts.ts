import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactsProvider} from "@providers/contacts/contacts";
import {ContactPage} from "@pages/contact/contact";
import {GlobalsProvider} from "@providers/globals/globals";

@Component({
    selector: 'page-contacts',
    templateUrl: 'contacts.html'
})
export class ContactsPage {

    public contacts: any;

    constructor(public navCtrl: NavController, private contactsProvider: ContactsProvider, public globals: GlobalsProvider) {
        this.loadContacts();
    }

    loadContacts() {
        this.contactsProvider.all()
            .then(data => {
                this.contacts = data;
            });
    }

    showContact(id) {
        this.navCtrl.push(ContactPage, {
            contact: id
        });
    }

}
