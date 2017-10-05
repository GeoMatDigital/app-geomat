import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GlossaryService } from '../../services/glossary';

/**
 * Generated class for the GlossaryPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-glossary-popover',
  templateUrl: 'glossary-popover.html',
})
export class GlossaryPopoverPage {
  public glossaryEntry;

  constructor(public navParams: NavParams, private glossaryService: GlossaryService) {
  }

  ngOnInit() {
    this.glossaryEntry = this.glossaryService.getGlossaryEntry(this.navParams.data.id).subscribe((item) => { console.log(this.glossaryEntry); return this.glossaryEntry = item});
    // console.log(this.navParams.data.glossaryEntry);
  }
}
