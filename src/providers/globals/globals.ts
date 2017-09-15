import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {File} from "@ionic-native/file";
import {Platform} from "ionic-angular";


@Injectable()
export class GlobalsProvider {

  dataDirectory: any;

  constructor(public http: Http, private file: File, private platform: Platform) {
    console.log("Hello globals");

    this.dataDirectory = '';

    if (this.platform.is('ios')) {
      // this.dataDirectory = this.file.dataDirectory;
    }

    console.log("Data directory: " + this.dataDirectory);
  }

  setDataDirectory() {

  }
}
