import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewProfileserviceProvider} from "../../providers/new-profileservice/new-profileservice";
import {Profile} from "../../models/profile";

/**
 * Generated class for the NewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-profile',
  templateUrl: 'new-profile.html',
})
export class NewProfilePage {
  profiles: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: NewProfileserviceProvider) {
  //profileProvider.getProfiles().subscribe(data => (this.profile_list = data));
  //console.log(this.profile_list);
    this.profiles = profileProvider.profile_list;
    console.log(this.profiles)
  }

  image_name(full_name){
    full_name = full_name.slice(0, 5);
    return full_name
  }

  /*onProfile(systematics: string, imagePath: string = null) {
    if (this._profiles) {
      let profiles = this._profiles.filter((profile: Profile): boolean => {
        return profile.systematics == systematics;
      });

      systematics === 'Silikate und Germanate'
        ? this._navCtrl.push(this._profiles2Page, {
          profiles: profiles,
          header: systematics
        })
        : this._navCtrl.push(this._profiles1Page, {
          profiles: profiles,
          header: systematics,
          imagePath: imagePath
        });
    }
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProfilePage');
  }

}
