import { Component, OnInit } from '@angular/core';
import { NavParams, MenuController } from 'ionic-angular';
import { Profile } from '../../../models/profile';

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
   * stores current active menu (main-menu or glossar)
   */
  activeMenu: string;

  /**
   * constructor()
   * @param navParams - stores parameters of navigation
   * @param menuCtrl - stores controller for handling the menus
   */
  constructor(public navParams: NavParams, private menuCtrl: MenuController) { }

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
   * Sets side-menu 'main-menu' as active
   * and sets 'glossar' inactive if on mobile view
   */
  mainMenuActive() {
    this.menuCtrl.close();
    this.activeMenu = 'mainMenu';
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'glossar');
    this.menuCtrl.open();
  }

  /**
   * Sets side-menu 'glossar' as active
   * and sets 'main-menu' inactive if on mobile view
   */
  glossarActive() {
    this.menuCtrl.close();
    this.activeMenu = 'glossar';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
    this.menuCtrl.open();
  }
}
