import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { RoutingModule } from "./app-routing.module";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrystalsystemsComponent } from './crystalsystems/crystalsystems.component';
import { ProfileDetailsComponent } from './profiles/profile-details/profile-details.component';
import { ProfileList1Component } from './profiles/profile-list-1/profile-list-1.component';
import { ProfileList2Component } from './profiles/profile-list-2/profile-list-2.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    GalleryComponent,
    CrystalsystemsComponent,
    ProfileDetailsComponent,
    ProfileList1Component,
    ProfileList2Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
