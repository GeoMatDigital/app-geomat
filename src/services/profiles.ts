import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Managing mineral-list information
 *
 * Retrieving data either bei local-json or the django-api
 */
@Injectable()
export class ProfilesService {
  /**
   * constructor()
   * @param http
   */
  constructor (private http: Http) {}

  /**
   * Get all minerals via api-request
   *
   * @returns {Obsevable<Response>} Minerallist
   */
  getProfiles() {
    return this.http.get(`${process.env.API_URL}/profiles`)
    // return this.http.get(`../pages/profiles/profiles.json`)
    .map((res:Response) => res.json());
  }

}
