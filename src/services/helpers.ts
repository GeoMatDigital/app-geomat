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
   * @param http
   */
  constructor (private http: Http) {}

  /**
   * Retrieves all information of helper.json
   *
   * @returns {Observable<Response} Helperitems
   */
  getHelpers() {
    return this.http.get('assets/helper/helper.json')
    .map((res:Response) => res.json());
  }

}
