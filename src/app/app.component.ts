import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

        /*
      this.file.checkDir(this.file.applicationDirectory, 'www/data')
          .then((result) => {
            console.log("directory exists: " + result);
             if(result) {
                 this.file.copyDir(this.file.applicationDirectory, 'www/data', this.file.dataDirectory, 'data')
                     .then((result) => {
                        console.log("Moved data directory: " + result);
                     }, function (error) {
                        console.log(error);
                     });
             }
          }, function (error) {
            console.log(error);
          });
          */

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
