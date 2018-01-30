import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, PopoverController } from 'ionic-angular';
import { GlossaryPopoverPage } from '../glossary-popover/glossary-popover';
import { MenuService } from '../../services/menu';

/**
 * Page of Helper (Bestimmungshelfer)
 */
@IonicPage()
@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html',
})
export class HelperPage {
  /**
   * Stores slide-content
   */
  @ViewChild(Slides) slides: Slides;

  /**
   * constructor()
   * @param {MenuController} menuCtrl
   * @param {PopoverController} popoverCtrl
   */
  constructor(
    private _menuService: MenuService,
    public _popoverCtrl: PopoverController) {}


  /**
   * Gets glossary entry by id and shows it in popover
   * @param event
   * @param glossaryEntryId
   */
  showGlossaryEntry(event, glossaryEntryId) {
    let popover = this._popoverCtrl.create(GlossaryPopoverPage, {id:glossaryEntryId});
    popover.present({
      ev: event
    });
  }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
