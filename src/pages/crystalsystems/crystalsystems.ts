import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';

/**
 * Crystal-systems page for users to play around with the 7 crystalsystems
 */
@IonicPage()
@Component({
  selector: 'page-crystalsystems',
  templateUrl: 'crystalsystems.html',
})
export class CrystalsystemsPage {
  /**
   * constructor()
   * @param _menuService
   */
  constructor(private _menuService: MenuService) {}

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
