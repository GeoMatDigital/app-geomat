import {Component, ViewChild} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';
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
  @ViewChild('gallery_images') gallery_images;
  opacity: number;
  loading_pic = "assets/gallery/Loading_icon.gif";

  constructor(private _menuService: MenuService, public dataService: GalleryDataProvider) {
    this.opacity = 0;

    this.dataService.load().then((data) => {

      data.map((photos) => {
        return photos;
      });
      for (let image of data) {
        this.photos.push(image.image_file.small);
      }
      this.opacity = 1;
    });
    console.log("out");


  }

  ionViewDidLoad() {
/*
    let random = document.getElementById('gallery_images');
    console.log("VIEWDIDLOAD");
    [].forEach.call(document.querySelectorAll('img'),
      function(img) {
      console.log("data-srcsa");
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
          img.removeAttribute('data-src');
        };
      });
    console.log(random);*/


  }

  ngAfterViewInit() {

  }

  // datafetched() {
  //
  //
  //   let closeIcon = 'md-close';
  //   let initialSlide = 0;
  //   console.log(this.photos);
  //   let modal = this.modalCtrl.create(GalleryModal, {
  //     photos: this.photos,
  //     initialSlide: initialSlide,
  //     closeIcon: closeIcon
  //   });
  //   modal.present();
  // }


  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);
  }
}
