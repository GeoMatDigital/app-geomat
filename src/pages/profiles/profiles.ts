import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { ProfilesService } from '../../services/profiles';
import { Profiles1Page } from './profiles1/profiles1';
import { Profiles2Page } from './profiles2/profiles2';
import { Profile } from '../../models/profile';

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  profiles: Profile[];
  profiles1Page;
  profiles2Page;
  header: string = "?";
  activeMenu: string;

  /**
 * @param {string} target  The target to process see {@link Todo}
 *
 * @example
 * This is a good example
 * processTarget('yo')
 *
 * * ```
 * &lt;mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/mwl-calendar-day-view&gt;
 * ```
 *
 * @returns      void
 */
  constructor(public navCtrl: NavController, private profilesService: ProfilesService, private menuCtrl: MenuController) {
    this.profiles1Page = Profiles1Page;
    this.profiles2Page = Profiles2Page;
  }

  ionViewDidLoad() {
    this.profilesService.getProfiles().subscribe(data => this.profiles = data);
  }

  onProfile(systematics: string) {
    let profiles = this.profiles.filter((profile: Profile): boolean => {
      return profile.mineral_type.systematics == systematics;
    });

    (systematics === 'Silikate und Germanate') ?
      this.navCtrl.push(this.profiles2Page, {profiles: profiles, header: systematics }) :
      this.navCtrl.push(this.profiles1Page, { profiles: profiles, header: systematics });
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
