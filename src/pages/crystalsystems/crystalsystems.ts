import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';
import { D3Service, D3, RGBColor, Selection } from 'd3-ng2-service';

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
   * Storing D3.js functionality
   */
  private d3: D3;
  /**
   * constructor()
   * @param _menuService
   */
  constructor(private _menuService: MenuService, public d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
