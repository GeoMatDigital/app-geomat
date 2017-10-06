import { Component } from '@angular/core';
import { GlossaryService } from '../../services/glossary';
import { Observable } from 'rxjs/Observable';

/**
 * stores current glossary entries
 * manages content of sidemenu
 */
@Component({
  selector: 'page-glossary',
  templateUrl: 'glossary.html',
})
export class GlossaryPage {
  /**
   * Stores all glossary-items
   */
  glossary$: Observable<any[]>;

  /**
   * constructor()
   * @param glossaryService
   */
  constructor(private _glossaryService: GlossaryService) {
    this.glossary$ = this._glossaryService.getGlossary();
  }

}
