import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  infoPage = InfoPage;
  homePage = HomePage;
  activeMenu: string;

  @ViewChild('gmApp') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    throw new Error('I am a bug... 🐛');
  }

  onLoad(page: any) {
    console.log(page);
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  mainMenuActive() {
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'glossar');
  }

  glossarActive() {
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
  }
}

