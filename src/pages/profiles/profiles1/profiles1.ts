import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileDetailsPage } from '../../profiles/profile-details/profile-details';
import { Profile } from '../../../models/profile';
import { MenuService } from '../../../services/menu';

/**
 * Shows of the profile-page before profile-details gets shown
 */
@IonicPage()
@Component({
  selector: 'page-profiles1',
  templateUrl: 'profiles1.html',
})
export class Profiles1Page implements OnInit{
  profile: Profile;
  profiles;
  profileDetailsPage = ProfileDetailsPage;
  header:string;
  imagePath: string;

  /**
   * constructor()
   * @param navParams
   * @param navCtrl
   * @param _menuService
   */
  constructor(
    private _navParams: NavParams,
    public _navCtrl: NavController,
    private _menuService: MenuService) {
  }

  /**
   * Initializes profile-page and gets data by nav-controller
   */
  ngOnInit() {
    this.profiles = this._navParams.get('profiles');
    this.header = this._navParams.get('header');
    this.imagePath = this._navParams.get('imagePath');
  }

  /**
   * Navigates to the profile-details page
   * @param mineral
   */
  onProfiles(mineral) {
    if(this.profiles){
      this.profile = this.profiles.filter((profile: Profile):boolean => {
        return profile.mineral_type.id == mineral.mineral_type.id;
      })[0];
      this._navCtrl.push(this.profileDetailsPage, { profile: this.profile });
    }
  }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
