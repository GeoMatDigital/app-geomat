import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, MenuController, PopoverController } from 'ionic-angular';
import { HelpersService } from '../../services/helpers';
import { GlossaryPopoverPage } from '../glossary-popover/glossary-popover';

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
   * Stores helper entries of all slide-pages
   */
  public helpers;
  /**
   * Stores current active menu
   */
  public activeMenu: string;
  /**
   * Stores slide-content
   */
  @ViewChild(Slides) slides: Slides;

  /**
   * constructor()
   * @param {HelperService} helperService
   * @param {MenuController} menuCtrl
   * @param {PopoverController} popoverCtrl
   */
  constructor(
    private helperService: HelpersService,
    private menuCtrl: MenuController,
    public popoverCtrl: PopoverController) {}

  /**
   * Loads the helper-service
   *
   * For more info, see: [HelperService]{@link HelperService}
   */
  ionViewDidLoad(){
    this.helperService.getHelpers().subscribe(data => this.helpers = data);
  }

  /**
   * Gets glossary entry by id and shows it in popover
   * @param event
   * @param glossaryEntryId
   */
  showGlossaryEntry(event, glossaryEntryId) {
    // this.glossaryEntry = this.glossaryService.getGlossaryEntry(glossaryEntryId).subscribe(item => { return item; });

    let popover = this.popoverCtrl.create(GlossaryPopoverPage, {id:glossaryEntryId});
    popover.present({
      ev: event
    });
  }

  /**
   * Slides to requested page within helper-page (currently not used anymore, replaced with popover feature)
   * @param {string} chapter
   */
  onLink(chapter:string) {
    this.slides.slideTo(this.getIndexOfChapter(chapter), 500);
  }

  //
  /**
   * Gets index of requested chapter
   *
   * TODO: Changing getting helper-page-index dynamically
   * @param {string} chapter
   * @returns {number} chapter id
   */
  private getIndexOfChapter(chapter:string) {
    switch(chapter) {
      case "abstrakt": 1;
      case "allgemeines": 2;
      case "kristallsystem": return 2;
      case "habitus": return 3;
      case "tracht": return 4;
      case "bruch": return 5;
      case "spaltbarkeit": return 6;
      case "glanz": return 7;
      case "farbe": return 8;
      case "transparenz": return 9;
      case "besonderheiten": return 10;
      default: return 3
    }
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
