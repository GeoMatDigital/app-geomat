import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import {GalleryDataProvider} from "../../providers/gallery-data/gallery-data";

/**
 * Gallery-page
 * Shows all images of all minerals at one place
 */
@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  /**
   * constructor()
   * @param _menuService
   */

  photos: any[] = [];

  constructor(private _menuService: MenuService, public dataService: GalleryDataProvider, public modalCtrl: ModalController) {

    this.openModal()
  }

  openModal() {
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

  datafetched() {


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


  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
