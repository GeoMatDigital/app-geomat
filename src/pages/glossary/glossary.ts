import { Component } from '@angular/core';
import { GlossaryService } from '../../services/glossary';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-glossary',
  templateUrl: 'glossary.html',
})
export class GlossaryPage {
  glossary$: Observable<any[]>;

  constructor(private glossaryService: GlossaryService) {
    this.glossary$ = this.glossaryService.getGlossary();
  }

}
