import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';

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
  constructor(private _menuService: MenuService) { }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
