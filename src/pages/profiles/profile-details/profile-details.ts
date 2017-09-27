import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Profile } from '../../../models/profile';

@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html'
})
export class ProfileDetailsPage implements OnInit {
  profile: Profile;
  public formulae: string = '';

  constructor(public navParams: NavParams) { }

  ionViewDidEnter() {
  }

  ngOnInit() {
    this.profile = this.navParams.get('profile');
    this.formulae = "`" + this.profile.mineral_type.chemical_formula +"`";

    // Replacing abbreviations with german crystalsystems
    this.profile.crystal_system = this.getCrystalsystem(this.profile.crystal_system);

    // Replacing abbreviations with german fractures
    for(let i = 0; i < this.profile.mineral_type.fracture.length; i++) {
      this.profile.mineral_type.fracture[i] = this.getFracture(this.profile.mineral_type.fracture[i]);
    }

    // Replacing abbreviations with german cleavages
    for(let i = 0; i < this.profile.mineral_type.cleavage.length; i++) {
      this.profile.mineral_type.cleavage[i] = this.getCleavage(this.profile.mineral_type.cleavage[i]);
    }

    // Replacing abbreviations with german lustres
    for(let i = 0; i < this.profile.mineral_type.lustre.length; i++) {
      this.profile.mineral_type.lustre[i] = this.getLustre(this.profile.mineral_type.lustre[i]);
    }
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

  getFracture(fracture: string) {
    switch(fracture) {
      case 'CF': return 'muschelig';
      case 'EF': return 'erdig';
      case 'HF': return 'zerhackt';
      case 'SF': return 'splittrig';
      case 'UF': return 'ungleichmäßig';
      default: return '';
    }
  }

  getCleavage(cleavage: string) {
    console.log(cleavage);
    switch(cleavage) {
      case 'PE': return 'perfekt';
      case 'LP': return 'weniger perfekt';
      case 'GO': return 'gut';
      case 'DI': return 'unterschiedlich';
      case 'ID': return 'unbestimmt';
      case 'NO': return 'keine';
      default: return '';
    }
  }

  getLustre(lustre: string) {
    switch(lustre) {
      case 'AM': return 'adamantin';
      case 'DL': return 'langweilig';
      case 'GR': return 'fettig';
      case 'MT': return 'metallisch';
      case 'PY': return 'perlig';
      case 'SL': return 'seidig';
      case 'SM': return 'submetallisch';
      case 'VT': return 'gläsern';
      case 'WY': return 'wachsartig';
      default: return '';
    }
  }
    // switch(fracture) {
    //   case 'CF': return 'muschelig';
    //   case 'EF': return 'erdig';
    //   case 'HF': return 'zerhackt';
    //   case 'SF': return 'splittrig';
    //   case 'UF': return 'ungleichmäßig';
    // }
}
