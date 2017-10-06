import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Profile } from '../../../models/profile';
import { MenuService } from '../../../services/menu';

/**
 * Page for mineral-details
 */
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html'
})
export class ProfileDetailsPage implements OnInit {
  /**
   * Stores current mineral
   */
  profile: Profile;

  /**
   * constructor()
   * @param navParams - stores parameters of navigation
   * @param menuCtrl - stores controller for handling the menus
   */
  constructor(public navParams: NavParams, private _menuService: MenuService) { }

  /**
   * fired if profile-detail page is initialized
   */
  ngOnInit() {
    this.profile = this.navParams.get('profile');
    this.profile.mineral_type.chemical_formula = this.profile.mineral_type.chemical_formula.substr(1);
    this.profile.mineral_type.chemical_formula = this.profile.mineral_type.chemical_formula.substr(0,this.profile.mineral_type.chemical_formula.length-1);

    this.profile.mineral_type.chemical_formula = this.formatFormula();

    // Replacing abbreviations with german crystalsystems
    this.profile.crystal_system = this.getCrystalsystem(this.profile.crystal_system);
  }
  /**
   * Replace '_' and '^' with proper html-tags
   *
   * @returns {string} formatted formula
   */
  private formatFormula():string {
    let formula:string = this.profile.mineral_type.chemical_formula.replace(" ", ""); // removing whitespace
    let sub:RegExpMatchArray = formula.match(/\_\{?\d+\+?\}?/ig);
    let sup:RegExpMatchArray = formula.match(/\^\{?\d+\+?\}?/ig);

    if(sub !== null) {
      sub.forEach(element => {
        let cleanElement = element.replace("_", "").replace("{","").replace("}","");
        formula = formula.replace(element,"<sub>" + cleanElement +"</sub>");
      });
    }

    if(sup !== null) {
      sup.forEach(element => {
        let cleanElement = element.replace("^", "").replace("{","").replace("}","");
        formula = formula.replace(element, "<sup>" + cleanElement +"</sup>");
      });
    }

    return '<div class="item-inner"><div class="input-wrapper"><ion-label class="label label-md">' + formula + '</ion-label></div></div>';
  }

  /**
   * Gets full name of requested crystal-system
   *
   * @return {string} full name of crystal-system
   */
  private getCrystalsystem(crystal_system: string) {
    switch(crystal_system)      {
      case 'TC': return 'Triklin';
      case 'MC': return 'Monoklin';
      case 'OR': return 'Orthorhombisch';
      case 'TT': return 'Tetragonal';
      case 'HG': return 'Hexagonal';
      case 'TR': return 'Trigonal (Rhomboedrisch)';
      case 'CB': return 'Kubisch';
      default:   return ' - ';
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
