import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalsProvider} from "@providers/globals/globals";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(private http: Http, private globals: GlobalsProvider) {
    console.log('Hello ApiProvider Provider');
  }

  public getJson(path : string, data){
    return new Promise(resolve => {
        this.http.get(this.globals.dataDirectory + path)
            .map(res => res.json())
            .subscribe(jsonData => {
                data = jsonData;
                resolve(data);
            });
    })
  }

}
