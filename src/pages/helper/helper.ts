import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, MenuController } from 'ionic-angular';
import { HelpersService } from '../../services/helpers';

/**
 * Generated class for the HelperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html',
})
export class HelperPage {
  public helpers;
  activeMenu: string;

  @ViewChild(Slides) slides: Slides;

  constructor(private helperService: HelpersService, private menuCtrl: MenuController) {}

  ionViewDidLoad(){
    this.helperService.getHelpers().subscribe(data => {this.helpers = data; console.log(data)});
  }

  onLink(chapter:string) {
    console.log(this.getIndexOfChapter(chapter));
    this.slides.slideTo(this.getIndexOfChapter(chapter), 500);
  }

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
