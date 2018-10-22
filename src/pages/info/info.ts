import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { MenuService } from '../../services/menu';
import { FeedbackPage } from '../feedback/feedback';
import { PrivacyPage } from '../privacy/privacy';

/**
 * Contains static info about the app and their developer
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  _privacypage = PrivacyPage;

  /**
   * constructor()
   * @param _menuService
   * @param _modalCtrl
   */
  constructor(private _menuService: MenuService, private _modalCtrl: ModalController) { }


  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
  
  onFeedback() {
    const modal = this._modalCtrl.create(FeedbackPage);
    modal.present();
  }
}
