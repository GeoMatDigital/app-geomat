import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { MenuService } from '../../services/menu';
import { FeedbackPage } from '../feedback/feedback';

/**
 * Contains static info about the app and their developer
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  /**
   * constructor()
   * @param _menuService
   */
  constructor(private _menuService: MenuService, private modalCtrl: ModalController) { }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
  
  onFeedback() {
    const modal = this.modalCtrl.create(FeedbackPage);
    modal.present();
  }
}
