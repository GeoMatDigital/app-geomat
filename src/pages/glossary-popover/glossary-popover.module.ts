import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlossaryPopoverPage } from './glossary-popover';

@NgModule({
  declarations: [
    GlossaryPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(GlossaryPopoverPage),
  ],
})
export class GlossaryPopoverPageModule {}
