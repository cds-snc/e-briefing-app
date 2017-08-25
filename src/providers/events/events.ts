import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  load(day) {
    return new Promise(resolve => {
      this.http.get('data/days/' + day + '.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data.events;
            resolve(this.data);
          });
    })
  }

}
