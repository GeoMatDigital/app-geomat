import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProfilesService } from '../../services/profiles';
import { Profiles1Page } from './profiles1/profiles1';
import { Profiles2Page } from './profiles2/profiles2';
import { Profile } from '../../models/profile';
import { MenuService } from '../../services/menu';

/**
 * Initial view of profiles list
 */
@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {
  _profiles: Profile[];
  _profiles1Page = Profiles1Page;
  _profiles2Page = Profiles2Page;
  _header: string = '?';
  _activeMenu: string;

  /**
   * constructor()
   * @param _navCtrl
   * @param _profilesService
   * @param _menuService
   */
  constructor(
    public _navCtrl: NavController,
    private _profilesService: ProfilesService,
    private _menuService: MenuService
  ) {}

  /**
   * Initializing profiles
   */
  ionViewDidLoad() {
    this._profilesService
      .getProfiles()
      .subscribe(data => (this._profiles = data));
  }

  /**
   * Navigates to specific profile-group (e.g. minerals of "elements")
   */
  onProfile(systematics: string, imagePath: string = null) {
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
  }
  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
