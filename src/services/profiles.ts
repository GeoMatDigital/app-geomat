import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfilesService {
  constructor (private http: Http) {}

  getProfiles() {
    return this.http.get(`https://geomat.uni-frankfurt.de/api/crystalsystem_list/`)
    // return this.http.get(`../assets/profiles/profiles.ts`)
    .map((res:Response) => res.json());
  }

}
