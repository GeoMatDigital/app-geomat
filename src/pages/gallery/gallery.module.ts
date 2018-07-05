import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {LazyLoadImagesModule} from "ngx-lazy-load-images";
import {HomePage} from "../home/home";

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    ionicGalleryModal.GalleryModalModule,
    LazyLoadImagesModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    }
  ]
})
export class GalleryPageModule {}
