import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProfilePage } from './new-profile';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    NewProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(NewProfilePage),
    ComponentsModule
  ],
})
export class NewProfilePageModule {}
