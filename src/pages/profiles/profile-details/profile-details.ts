import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
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
    this.profile.crystal_system = this.getCrystalsystem(this.profile.crystal_system);
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
}
