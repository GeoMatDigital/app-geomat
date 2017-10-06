import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { CrystalsystemsPage } from '../crystalsystems/crystalsystems';
import { ProfilesPage } from '../profiles/profiles';

import { GlossaryPage } from '../glossary/glossary';
import { GalleryPage } from '../gallery/gallery';
import { QuizPage } from '../quiz/quiz';
import { HelperPage } from '../helper/helper';

/**
 * Page for initial view
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * Stores page for crystal-system page
   */
  crystalsystemsPage = CrystalsystemsPage;
  /**
   * Stores page for initial view of profiles
   */
  profilesPage = ProfilesPage;
  /**
   * Stores page for glossary (not yet imlemented, because glossary viewable via sidemenu and popover)
   */
  glossaryPage = GlossaryPage;
  /**
   * Stores page for gallery (not yet implemented)
   */
  galleryPage = GalleryPage;
  /**
   * Stores page for helperpage ('Bestimmungshelfer')
   */
  helperPage = HelperPage;
  /**
   * Stores page for quiz (not yet implemented)
   */
  quizPage = QuizPage;
  /**
   * Stores info which menu is currently active
   */
  activeMenu: string;

  /**
   * constructor()
   * @param menuCtrl
   */
  constructor(private menuCtrl: MenuController) { }

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
