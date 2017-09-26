import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profiles1Page } from '../profiles1/profiles1';
import { Profile } from '../../../models/profile';

/**
 * Generated class for the Profiles2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles2',
  templateUrl: 'profiles2.html',
})
export class Profiles2Page implements OnInit{
  profiles1Page;
  profiles: Profile[];
  header: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profiles1Page = Profiles1Page;
  }

  ngOnInit() {
    this.profiles = this.navParams.get('profiles');
    this.header = this.navParams.get('header');
  }

  onProfileGroup(group: string) {
    let profiles = this.profiles.filter((profile: Profile): boolean => {
      console.log(profile.mineral_type.classification.classification_name + '==' + group);
      console.log(profile.mineral_type.classification.classification_name == group);
      return profile.mineral_type.classification.classification_name == group;
    });
    console.log(profiles);
    this.navCtrl.push(this.profiles1Page, { profiles: profiles, header: this.header });
  }
}
