import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
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
  @ViewChild(Slides) slides: Slides;

  constructor(private helperService: HelpersService) {
  }

  ionViewDidLoad(){
    this.helperService.getHelpers().subscribe(data => {this.helpers = data; console.log(data)});
  }

  onLink(chapter:string) {
    console.log(this.getIndexOfChapter(chapter));
    this.slides.slideTo(this.getIndexOfChapter(chapter), 500);
  }

  getIndexOfChapter(chapter:string) {
    switch(chapter) {
      case "": 1;
      case "crystalsystem": return 2;
      case "habitus": return 3;
      default: return 3
    }
  }

}
