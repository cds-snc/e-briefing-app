import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactsProvider} from "../../providers/contacts/contacts";

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  public contacts: any;

  constructor(public navCtrl: NavController, private contactsProvider: ContactsProvider) {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsProvider.load()
        .then(data => {
          this.contacts = data;
        });
  }

  showContact(id) {
    console.log(id);
  }

}
