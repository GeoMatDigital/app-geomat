import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewProfileserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewProfileserviceProvider {
  data: any;
  profile_list: any[];
  constructor(public http: Http) {
    console.log('Hello NewProfileserviceProvider Provider');
    this.load().then((data) => {
      let arr_key = Object.keys(data);
      this.profile_list = arr_key;
      let arr_context = Object.keys(data).map(function (k) {
        return data[k]
      });
      for (let item of arr_context) {
        console.log(item.link);
      }
      for (let item of arr_key) {
        console.log(item);
      }
    });
  }
  load(){

    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`${process.env.API_URL2}/profiles/0/a`).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });

  }

}
