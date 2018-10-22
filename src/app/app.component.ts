import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { PrivacyPage } from '../pages/privacy/privacy';
import { GlossaryPage } from '../pages/glossary/glossary';

/**
 * Root of the app, handling all app-wide features
 */
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /**
   * Stores the current root-page
   */
  rootPage:any = HomePage;

  /**
   * stores the info-page
   */
  infoPage = InfoPage;

  /**
   * stores the initial view
   */
  homePage = HomePage;

  /**
   * stores the initial view
   */
  privacyPage = PrivacyPage;


  /**
   * stores current active menu
   */
  activeMenu: string;

  /**
   * stores glossary page
   */
  glossaryPage = GlossaryPage;

  /**
   * Stores link to main nav-element for routing
   */
  @ViewChild('gmApp') nav: NavController;

  /**
   * Stores link to glossary-element (right-sidemenu)
   */
  @ViewChild(Content) glossary: Content;

  /**
   * constructor()
   * @param platform
   * @param statusBar
   * @param splashScreen
   * @param menuCtrl
   */
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.hide();
    });
    // throw new Error('I am a bug... 🐛');
  }

  /**
   * Sets current rootbage (set by main-menu [left sidemenu])
   * @param page
   */
  onLoad(page: any) {
    console.log(page);
    if(page == HomePage){
      this.nav.setRoot(page);
    }
    else{
      this.nav.push(page);
    }
    this.menuCtrl.close();
  }
  
  
  /**
   * Sets side-menu 'main-menu' as active
   * and sets 'glossar' inactive if on mobile view
   */
  mainMenuActive() {
    this.menuCtrl.close();
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'glossar');
    this.menuCtrl.open();
  }

  /**
   * Sets side-menu 'glossar' as active
   * and sets 'main-menu' inactive if on mobile view
   */
  glossarActive() {
    this.menuCtrl.close();
    this.activeMenu = 'glossar';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
    this.menuCtrl.open();
  }
}

