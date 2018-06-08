import {Component, ViewChild} from '@angular/core';
import { CrystalsystemsPage } from '../crystalsystems/crystalsystems';
import { ProfilesPage } from '../profiles/profiles';
import { GalleryPage } from '../gallery/gallery';
import { QuizPage } from '../quiz/quiz';
import { HelperPage } from '../helper/helper';
import { MenuService } from '../../services/menu';
import { InfoPage } from '../info/info';
import {IonicPage, ModalController} from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import {GalleryModal} from "ionic-gallery-modal";
import {GalleryDataProvider} from "../../providers/gallery-data/gallery-data";
import {NewProfilePage} from "../new-profile/new-profile";
import {NewProfileserviceProvider} from "../../providers/new-profileservice/new-profileservice";

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
  // glossaryPage = Ne;
  /**
   * Stores page for 'about us'
   */
  infoPage = NewProfilePage;
  /**
   * Stores page for gallery (not yet implemented)
   */
  galleryPage = GalleryPage;
  /**
   * Stores page for helperpage ('Bestimmungshelfer')
   */
  helperPage = HelperPage;
  /**
   * Stores page for quiz (Gallerie)
   */
  quizPage = QuizPage;

  public photos: any[] = [];
  anzahl: any[];
  @ViewChild('gallery_images') gallery_images;
  opacity: any;
  loading_pic = "assets/gallery/Loading_icon.gif";
  list: Array<object> = [];
  public foto_anzahl: number;
  data: any;


  /**
   * constructor()
   * @param menuCtrl
   */
  constructor(private _menuService: MenuService, private modalCtrl: ModalController, private dataService: GalleryDataProvider, public newProfile: NewProfileserviceProvider) {
    this.dataService.load().then((data) => {
      data.map((photos) => {
        return photos;
      });
      for (let image of data) {
        this.photos.push(image.image_file);
      }
      console.log("Home: " + this.photos.length);
      this.opacity = 1;
    }).then(() => {
      this.anzahl = this.photos;
    });
  }

  /*private openModal() {
    this.dataService.load().then((data) => {

      data.map((list) => {
        return list;
      });
      for (let image of data) {
        this.photos.push({url: image.image_file.small});
      }
    }).then(() =>
      this.datafetched());
  }

  private datafetched() {


    let closeIcon = 'md-close';
    let initialSlide = 0;
    console.log(this.photos);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: initialSlide,
      closeIcon: closeIcon
    });
    modal.present();
  }
*/
  /**
   * Opens requested sidemenu
   * and deactivates other sidemenus
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }

  onFeedback() {
    const modal = this.modalCtrl.create(FeedbackPage);
    modal.present();
  }
}
