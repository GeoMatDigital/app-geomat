import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfileDetailsPage } from '../../profiles/profile-details/profile-details';
import { Profile } from '../../../models/profile';

/**
 * Generated class for the Profile1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles1',
  templateUrl: 'profiles1.html',
})
export class Profiles1Page implements OnInit{
  profile: Profile;
  profiles;
  profileDetailsPage;
  header:string;
  activeMenu: string;

  constructor(private navParams: NavParams, public navCtrl: NavController, private menuCtrl: MenuController) {
    this.profileDetailsPage = ProfileDetailsPage;
  }

  ngOnInit() {
    this.profiles = this.navParams.get('profiles');
    this.header = this.navParams.get('header');
  }

  onProfiles(mineral) {
    // to be improved: replace this.profile with profile as returned value

    this.profile = this.profiles.filter((profile: Profile):boolean => {
      return profile.mineral_type.id == mineral.mineral_type.id;
    })[0];

    this.navCtrl.push(this.profileDetailsPage, { profile: this.profile });
  }

  mainMenuActive() {
    this.menuCtrl.close();
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'glossar');
    this.menuCtrl.open();
  }

  glossarActive() {
    this.menuCtrl.close();
    this.activeMenu = 'glossar';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
    this.menuCtrl.open();
  }

}
