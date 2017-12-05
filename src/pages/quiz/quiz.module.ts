import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPage } from './quiz';
import { FlashCard } from "../../components/flash-card/flash-card";

@NgModule({
  declarations: [
    FlashCard,
    QuizPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizPage),
  ],
})
export class QuizPageModule {}
