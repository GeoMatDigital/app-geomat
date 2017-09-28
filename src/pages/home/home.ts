import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {
    // this.crystalsystemsPage = CrystalsystemsPage;
    // this.profilesPage = ProfilesPage;
    // this.profiles1Page = Profiles1Page;
    // this.profiles2Page = Profiles2Page;
    // this.glossaryPage = GlossaryPage;
    // this.galleryPage = GalleryPage;
  }

}
