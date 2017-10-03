import { Component, OnInit } from '@angular/core';
import { NavParams, MenuController } from 'ionic-angular';
import { Profile } from '../../../models/profile';

@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html'
})
export class ProfileDetailsPage implements OnInit {
  profile: Profile;
  public formulae: string = '';
  activeMenu: string;

  constructor(public navParams: NavParams, private menuCtrl: MenuController) { }

  ionViewDidEnter() {
  }

  ngOnInit() {
    this.profile = this.navParams.get('profile');
    this.formulae = this.profile.mineral_type.chemical_formula;
    this.profile.mineral_type.chemical_formula = this.profile.mineral_type.chemical_formula.substr(1);
    this.profile.mineral_type.chemical_formula = this.profile.mineral_type.chemical_formula.substr(0,this.profile.mineral_type.chemical_formula.length-1);

    this.profile.mineral_type.chemical_formula = this.formatFormula();

    // Replacing abbreviations with german crystalsystems
    this.profile.crystal_system = this.getCrystalsystem(this.profile.crystal_system);

    // // Replacing abbreviations with german fractures
    // for(let i = 0; i < this.profile.mineral_type.fracture.length; i++) {
    //   this.profile.mineral_type.fracture[i] = this.getFracture(this.profile.mineral_type.fracture[i]);
    // }

    // // Replacing abbreviations with german cleavages
    // for(let i = 0; i < this.profile.mineral_type.cleavage.length; i++) {
    //   this.profile.mineral_type.cleavage[i] = this.getCleavage(this.profile.mineral_type.cleavage[i]);
    // }

    // // Replacing abbreviations with german lustres
    // for(let i = 0; i < this.profile.mineral_type.lustre.length; i++) {
    //   this.profile.mineral_type.lustre[i] = this.getLustre(this.profile.mineral_type.lustre[i]);
    // }
  }

  formatFormula():string {
    let formula = this.profile.mineral_type.chemical_formula.replace(" ", ""); // removing whitespace
    let sub = formula.match(/\_\{?\d+\+?\}?/ig);
    let sup = formula.match(/\^\{?\d+\+?\}?/ig);

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
    // formula.replace();

    // let result;
    // while ((result = /_\+?\d+/g.exec(text)) !== null) {
    //     let matchIndex = result.index;
    //     let t = result[0].length;
    //     matchRanges.push(new RegRange(matchIndex, t));
    // }

    // matchedUnderscore = /_[0-9]+/g.exec(formula);
  }

  getCrystalsystem(crystal_system: string) {
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

  // getFracture(fracture: string) {
  //   switch(fracture) {
  //     case 'CF': return 'muschelig';
  //     case 'EF': return 'erdig';
  //     case 'HF': return 'zerhackt';
  //     case 'SF': return 'splittrig';
  //     case 'UF': return 'ungleichmäßig';
  //     default: return '';
  //   }
  // }

  // getCleavage(cleavage: string) {
  //   switch(cleavage) {
  //     case 'PE': return 'perfekt';
  //     case 'LP': return 'weniger perfekt';
  //     case 'GO': return 'gut';
  //     case 'DI': return 'unterschiedlich';
  //     case 'ID': return 'unbestimmt';
  //     case 'NO': return 'keine';
  //     default: return '';
  //   }
  // }

  // getLustre(lustre: string) {
  //   switch(lustre) {
  //     case 'AM': return 'adamantin';
  //     case 'DL': return 'langweilig';
  //     case 'GR': return 'fettig';
  //     case 'MT': return 'metallisch';
  //     case 'PY': return 'perlig';
  //     case 'SL': return 'seidig';
  //     case 'SM': return 'submetallisch';
  //     case 'VT': return 'gläsern';
  //     case 'WY': return 'wachsartig';
  //     default: return '';
  //   }
  // }

  // mainMenuActive() {
  //   this.menuCtrl.close();
  //   this.activeMenu = 'mainMenu';
  //   this.menuCtrl.enable(true, 'mainMenu');
  //   this.menuCtrl.enable(false, 'glossar');
  //   this.menuCtrl.open();
  // }

  glossarActive() {
    this.menuCtrl.close();
    this.activeMenu = 'glossar';
    this.menuCtrl.enable(false, 'mainMenu');
    this.menuCtrl.enable(true, 'glossar');
    this.menuCtrl.open();
  }
}
