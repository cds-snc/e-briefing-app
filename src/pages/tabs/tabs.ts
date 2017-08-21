import { Component } from '@angular/core';

import { ArticlesPage } from '../articles/articles';
import { ContactsPage } from '../contacts/contacts';
import { DocumentsPage } from '../documents/documents';
import { DaysPage } from '../days/days';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  schedule = DaysPage;
  documents = DocumentsPage;
  articles = ArticlesPage;
  contacts = ContactsPage;

  constructor() {

  }
}
