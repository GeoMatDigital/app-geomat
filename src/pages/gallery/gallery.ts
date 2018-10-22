import {Component, ViewChild} from '@angular/core';
import { MenuService } from '../../services/menu';
import {GalleryDataProvider} from "../../providers/gallery-data/gallery-data";
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import {HomePage} from "../home/home";

/**
 * Gallery-page
 * Shows all images of all minerals at one place
 */
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  /**
   * constructor()
   * @param _menuService
   */
  public photos: any[] = [];
  public anzahl: any;
  @ViewChild('gallery_images') gallery_images;
  opacity: number;
  loading_pic = "assets/gallery/Loading_icon.gif";
  list: Array<object> = [];

  constructor(private _menuService: MenuService, public dataService: GalleryDataProvider, private modalCtrl: ModalController) {
    this.opacity = 0;
    // this.photos = this.dataService.photos;
    this.dataService.load().then((data) => {
      data.map((photos) => {
        return photos;
      });
      for (let image of data) {
        this.photos.push(image);
      }
      this.anzahl = this.photos;
      this.opacity = 1;
    }).then(() => {
    for (let image of this.photos){
      this.list.push({url: image.image_file.large});
    }
    });


  }

  getPicture(index) {
    if (this.photos.length != 0) {
//      console.log("Pictures loaded");
      return this.photos[index].image_file.small
    }
    else {
//      console.log("No Picture");
      return ""
    }

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

  openpic(image_num) {
    let closeIcon = 'md-close';
//    console.log(this.list);
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.list,
      initialSlide: image_num,
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
