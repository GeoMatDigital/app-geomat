import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Managing GlossaryEntries
 */
@Injectable()
export class GlossaryService {
  /**
   * constructor()
   * @param _http
   */
  constructor (private _http: Http) {}

  /**
   * Get all glossary entries
   * @returns {Obserable<any[]>} GlossaryEntries
   */
  getGlossary(): Observable<any[]> {
    return this._http.get('https://geomat.uni-frankfurt.de/api/glossary')
    .map((res:Response) => res.json());
  }

  /**
   * Get a specific glossary entry by id
   * @param glossaryEntryId
   * @returns {Observable<any>} GlossaryEntry
   */
  getGlossaryEntry(glossaryEntryId): Observable<any> {
    return this.getGlossary()
    .map(movies => movies.find(entry => entry.id == glossaryEntryId));
    // return this.getGlossary().map(items => items.find(movie => movie.id == glossaryEntryId));
  }

}
