import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profiles1Page } from '../profiles1/profiles1';
import { Profile } from '../../../models/profile';
import { MenuService } from '../../../services/menu';

/**
 * Page for "Silikat- und Germanat-Gruppen"
 */
@IonicPage()
@Component({
  selector: 'page-profiles2',
  templateUrl: 'profiles2.html',
})
export class Profiles2Page implements OnInit{
  /**
   * Stores profile1-page
   */
  profiles1Page = Profiles1Page;
  /**
   * Stores array of minerals
   */
  profiles: Profile[];
  /**
   *
   */
  header: string;
  activeMenu: string;

  /**
   * constructor()
   * @param _navCtrl
   * @param _navParams
   * @param _menuService
   */
  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams,
    private _menuService: MenuService) {}

  /**
   * Initialized profiles by data of nav-parameters
    */
  ngOnInit() {
    this.profiles = this._navParams.get('profiles');
    this.header = this._navParams.get('header');
  }
  /**
   * Navigates to profiles1-page by clicking on "Insel-, Gruppen-silikate, etc."
   * @param group
   */
  onProfileGroup(group: string) {
    if(this.profiles){
      let profiles = this.profiles.filter((profile: Profile): boolean => {
        return profile.classification.classification_name == group;
      });
      this.header = group
      this._navCtrl.push(this.profiles1Page, { profiles: profiles, header: this.header });
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
