import { Component } from '@angular/core';
import { CrystalsystemsPage } from '../crystalsystems/crystalsystems';
import { ProfilesPage } from '../profiles/profiles';

import { GlossaryPage } from '../glossary/glossary';
import { GalleryPage } from '../gallery/gallery';
import { QuizPage } from '../quiz/quiz';
import { HelperPage } from '../helper/helper';
import { MenuService } from '../../services/menu';
import { InfoPage } from '../info/info';

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
  // glossaryPage = GlossaryPage;
  /**
   * Stores page for 'about us'
   */
  infoPage = InfoPage;
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
   * constructor()
   * @param menuCtrl
   */
  constructor(private _menuService: MenuService) { }

  /**
   * Opens requested sidemenu
   * and deactivates other sidemenus
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
