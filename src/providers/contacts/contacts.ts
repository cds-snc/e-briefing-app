import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  all() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('data/people.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    })
  }

  get(id) {
      return new Promise(resolve => {
          this.http.get('data/people/' + id + '.json')
              .map(res => res.json())
              .subscribe(data => {
                  this.data = data;
                  resolve(this.data);
              });
      })
  }

}
