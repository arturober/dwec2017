import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contact: Contact = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public contacts: Contacts) {
  }

  pick() {
    this.contacts.pickContact()
      .then(c => {
        this.contact = c;
        console.log(c);
      });
  }
}
