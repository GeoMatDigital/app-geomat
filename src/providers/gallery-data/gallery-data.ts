import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryDataProvider {
  data: any;
  photos: any[] = [];
  opacity: any;
  public foto_anzahl: number;

  load(){

    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`${process.env.API_URL}/photograph_list`).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });

    });

  }
  constructor(public http: Http) {
    this.load().then((data) => {
      data.map((photos) => {
        return photos;
      });
      for (let image of data) {
        this.photos.push(image.image_file);
      }
      this.opacity = 1;
    }).then(() => {
      this.foto_anzahl = this.photos.length;
    });
  }


}
