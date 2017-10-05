import { Component } from '@angular/core';
import { GlossaryService } from '../../services/glossary';
import { Observable } from 'rxjs/Observable';

/**
 * stores current glossary entries
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
   * constructor() (not used anymore, replaced by sidemenu and popover)
   */
  constructor(private glossaryService: GlossaryService) {
    this.glossary$ = this.glossaryService.getGlossary();
  }

}
