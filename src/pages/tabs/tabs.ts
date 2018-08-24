import { Component } from '@angular/core';

import { ArticlesPage } from '@pages/articles/articles';
import { ContactsPage } from '@pages/contacts/contacts';
import { DocumentsPage } from '@pages/documents/documents';
import { DaysPage } from '@pages/days/days';
import {ArticlesProvider} from "@providers/articles/articles";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public articlesCount: any;

  schedule = DaysPage;
  documents = DocumentsPage;
  articles = ArticlesPage;
  contacts = ContactsPage;

  constructor(private articlesProvider: ArticlesProvider) {
    this.articlesProvider.all()
        .then(data => {
          this.articlesCount = data.length;
        });
  }
}
