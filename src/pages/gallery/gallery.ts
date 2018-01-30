import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';

/**
 * Gallery-page
 * Shows all images of all minerals at one place
 */
@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
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
