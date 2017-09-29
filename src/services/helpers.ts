import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HelpersService {
  constructor (private http: Http) {}

  getHelpers() {
    return this.http.get('pages/helper/helper.json')
    .map((res:Response) => res.json());
  }

}
