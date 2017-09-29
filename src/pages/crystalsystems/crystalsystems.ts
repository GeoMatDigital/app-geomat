import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';

/**
 * Generated class for the CrystalsystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crystalsystems',
  templateUrl: 'crystalsystems.html',
})
export class CrystalsystemsPage {
  activeMenu: string;

  constructor(private menuCtrl: MenuController) { }

  mainMenuActive() {
    this.menuCtrl.close();
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'glossar');
    this.menuCtrl.open();
  }

  glossarActive() {
    this.menuCtrl.close();
    this.activeMenu = 'glossar';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
    this.menuCtrl.open();
  }

}
