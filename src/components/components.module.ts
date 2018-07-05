import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { ProfileListComponent } from './profile-list/profile-list';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
import {NewProfilePageModule} from "../pages/new-profile/new-profile.module";
@NgModule({
	declarations: [ProgressBarComponent,
    ProfileListComponent],
	imports: [IonicModule, CommonModule],
	exports: [ProgressBarComponent,
    ProfileListComponent]
})
export class ComponentsModule {}
