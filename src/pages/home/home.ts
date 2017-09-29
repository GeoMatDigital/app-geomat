import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CrystalsystemsPage } from '../crystalsystems/crystalsystems';
import { ProfilesPage } from '../profiles/profiles';
import { Profiles1Page } from '../profiles/profiles1/profiles1';
import { Profiles2Page } from '../profiles/profiles2/profiles2';
import { GlossaryPage } from '../glossary/glossary';
import { GalleryPage } from '../gallery/gallery';
import { QuizPage } from '../quiz/quiz';
import { HelperPage } from '../helper/helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  crystalsystemsPage = CrystalsystemsPage;
  profilesPage = ProfilesPage;
  profiles1Page = Profiles1Page;
  profiles2Page = Profiles2Page;
  glossaryPage = GlossaryPage;
  galleryPage = GalleryPage;
  helperPage = HelperPage;
  quizPage = QuizPage;
  activeMenu: string;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
    // this.crystalsystemsPage = CrystalsystemsPage;
    // this.profilesPage = ProfilesPage;
    // this.profiles1Page = Profiles1Page;
    // this.profiles2Page = Profiles2Page;
    // this.glossaryPage = GlossaryPage;
    // this.galleryPage = GalleryPage;
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
