import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DayProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  load(id) {
    return new Promise(resolve => {
      this.http.get('data/days/' + id + '.json')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    })
  }

}
