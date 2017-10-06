import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Managing Sidemenus
 */
@Injectable()
export class MenuService {
  /**
   * Stores info which menu is currently active
   */
  private _activeMenu: string = 'mainMenu';

  constructor(private _menuCtrl: MenuController) {}
  /**
   * Opens requested Sidemenu and deactivates others
   */
  openSidemenu(activeMenu:string) {
    this._menuCtrl.close();
    this._menuCtrl.enable(false, this._activeMenu);
    this._activeMenu = activeMenu;
    this._menuCtrl.enable(true, activeMenu);
    this._menuCtrl.open();
  }

}
