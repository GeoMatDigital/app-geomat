import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
@Injectable()
export class GlossaryService {
  constructor (private http: Http) {}

  getGlossary(): Observable<any[]> {
    return this.http.get('assets/glossary/glossary.json')
    .map((res:Response) => res.json());
  }

  getGlossaryEntry(glossaryEntryId): Observable<any> {
    return this.getGlossary()
    .map(movies => movies.find(entry => entry.id == glossaryEntryId));
    // return this.getGlossary().map(items => items.find(movie => movie.id == glossaryEntryId));
  }

}
