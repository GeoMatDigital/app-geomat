import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController} from "ionic-angular";
/*
  Generated class for the NewProfileserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewProfileserviceProvider {
  check_tree_index: number = 0;
  timer: number = 0;
  finished: boolean = false;
  data: any;
  profile_data: StringMap = {};
  profile_list: any[] = [];
  profile_list_context: any[];
  loader: any;

  constructor(public http: Http, public loading: LoadingController) {
    console.log('Hello NewProfileserviceProvider Provider');

    //this.check_tree_depth('api/profiles/0/a')
    this.ionViewLoaded()

  }

  ionViewLoaded() {
    /*this.loader = this.loading.create({
      content: 'Lade aktuellste Daten...',
    });

    this.loader.present().then(() => {
      this.check_tree_depth('api/profiles/0/a')
      });
  }

  //recursive func needed to check how deep the tree for profile creation goes
  load(layer_api: string){

    return new Promise(resolve => {
      this.http.get(`${process.env.API_URL2}`+ layer_api).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });

  }

  check_api_for_layer_number(layer_api: string){
    if (layer_api.match("\\d")) {
      //console.log(layer_api.match("\\d"));
      return this.check_tree_index = +layer_api.match("\\d")[0]
    } else {
      return this.check_tree_index = -1
    }
  }

  check_tree_depth(layer_api: string) {
      this.check_api_for_layer_number(layer_api);
      if (this.timer == 6) {
        return console.log("Already loaded")
      } else {
      this.load(layer_api).then((data) => {
          // matches key to the api data
          this.profile_data[this.check_tree_index] = Object.keys(data);
          //this.profile_list.push(this.profile_data);
          //console.log(data);
          //console.log(Object.keys(data));
          //console.log(this.profile_list);
          // takes the context of the json and maps them into an array
          this.profile_list_context = Object.keys(data).map(function (k) {
            return data[k]
          });
          //console.log(this.profile_list_context);
        }
      ).then(() => {
        this.finished = false;
        for (let {layer, index} of this.profile_list_context.map((layer, index) => ({layer, index}))) {
          //console.log("Index Layer" + index);
          if (layer.hasOwnProperty('link')) {
            //console.log("Erneut zu checkende: " + layer.link);
            this.check_tree_depth(layer.link);
          } else {
            //console.log(layer);
            this.timer = this.timer + 1;
            //console.log(this.timer);
            if (this.timer == 6) {
              this.loader.dismiss();
            }
            //return console.log("deep dark depth reached");
          }
        }
      });
      }*/
  }
}

interface StringMap { [s: number]: string[]; }
