import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GlossaryService } from '../../services/glossary';

/**
 * Manages content of app-wide popovers filling with glossary-entry
 */
@IonicPage()
@Component({
  selector: 'page-glossary-popover',
  templateUrl: 'glossary-popover.html',
})
export class GlossaryPopoverPage {
  /**
   * Stores the requested glossary entry
   */
  public _glossaryEntry;

  /**
   * constructor()
   * @param _navParams
   * @param _glossaryService
   */
  constructor(
    private _navParams: NavParams,
    private _glossaryService: GlossaryService) {
  }

  /**
   * Initializes the popover with the requested entry
   */
  ngOnInit() {
    this._glossaryEntry = this._glossaryService.getGlossaryEntry(this._navParams.data.id)
      .subscribe((item) => { this._glossaryEntry = item });
  }
}
