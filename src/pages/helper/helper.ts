import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, MenuController, PopoverController } from 'ionic-angular';
import { HelpersService } from '../../services/helpers';
import { GlossaryPopoverPage } from '../glossary-popover/glossary-popover';

@IonicPage()
@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html',
})
export class HelperPage {
  public helpers;
  public activeMenu: string;

  @ViewChild(Slides) slides: Slides;

  constructor(
    private helperService: HelpersService,
    private menuCtrl: MenuController,
    public popoverCtrl: PopoverController) {}

  ionViewDidLoad(){
    this.helperService.getHelpers().subscribe(data => this.helpers = data);
  }

  showGlossaryEntry(event, glossaryEntryId) {
    // this.glossaryEntry = this.glossaryService.getGlossaryEntry(glossaryEntryId).subscribe(item => { return item; });

    let popover = this.popoverCtrl.create(GlossaryPopoverPage, {id:glossaryEntryId});
    popover.present({
      ev: event
    });
  }

  onLink(chapter:string) {
    this.slides.slideTo(this.getIndexOfChapter(chapter), 500);
  }

  // TODO: Changing getting helper-page-index dynamically
  getIndexOfChapter(chapter:string) {
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
