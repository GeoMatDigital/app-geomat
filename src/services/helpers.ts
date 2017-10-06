import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Managing Helperpage information
 */
@Injectable()
export class HelpersService {
  /**
   * constructor()
   * @param _http
   */
  constructor (private _http: Http) {}

  /**
   * Retrieves all information of helper.json
   *
   * @returns {Observable<Response} Helperitems
   */
  getHelpers() {
    return this._http.get('assets/helper/helper.json')
    .map((res:Response) => res.json());
  }
}
