import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalsProvider} from "@providers/globals/globals";

/*
  Generated class for the FileReaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FileReaderProvider {

  constructor(private http: Http, private globals: GlobalsProvider) {
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
