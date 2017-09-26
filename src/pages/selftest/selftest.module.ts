import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelftestPage } from './selftest';

@NgModule({
  declarations: [
    SelftestPage,
  ],
  imports: [
    IonicPageModule.forChild(SelftestPage),
  ],
})
export class SelftestPageModule {}
