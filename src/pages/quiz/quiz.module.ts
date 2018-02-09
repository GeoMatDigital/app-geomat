import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPage } from './quiz';
import { FlashCard } from "../../components/flash-card/flash-card";
import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

@NgModule({
  declarations: [
    FlashCard,
    QuizPage,
    ProgressBarComponent

  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
  ],
})
export class QuizPageModule {}
