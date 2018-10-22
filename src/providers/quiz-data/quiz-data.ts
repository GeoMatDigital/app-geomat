import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizDataProvider {
  data: any;

  constructor(public http: Http) {

  }

  load(){

    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`${process.env.API_URL}/quizquestion`).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });

    });

  }

}
