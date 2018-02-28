import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';
import { QuizDataProvider } from '../../providers/quiz-data/quiz-data';

/**
 * Managing the quiz-modul
 */
@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  @ViewChild('slides')
  slides: any;

  showAnswers: boolean[] = [false];
  answered: boolean = false;
  checked:boolean[] = [false, false, false , false, false, false ,false, false, false, false];
  score: number = 0;
  questions: any;

  /**
   * cosntructor()
   * @param _menuService
   */
  constructor(private _menuService: MenuService, public dataService: QuizDataProvider) {
    let _i:number = 0;
    while (_i < 99) {
      let value = false;
      this.showAnswers.push(value);
      _i++
    }
  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    this.dataService.load().then((data) => {

      data.map((question) => {

        let originalOrderAnswers = question.answers;
        question.answers = this.randomize(originalOrderAnswers);
        return question;

      });
      this.questions = this.randomize(data);
    });
  }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);

  }


  randomize(rawInput: any[]): any[] {

    for (let i = rawInput.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawInput[i];
      rawInput[i] = rawInput[j];
      rawInput[j] = temp;
    }

    return rawInput;

  }

  nextSlide(){
    this.answered = false;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  // index-Bearbeitung
  lastSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
  }


  // progress-bar animation
  loadProgress(curr_question_number) {
    curr_question_number = curr_question_number/84*100;

    return curr_question_number;
  }

  // answer selection method, sets value for checkAnswer method
  selectAnswer(answer, question, checkbox) {
    this.checked[answer.id] = checkbox.checked;
  }

  //check given Answer if correct or wrong
  checkAnswer(answerselected){
    this.showAnswers[this.slides.getActiveIndex()] = true;
    this.answered = true;
    return;
  }

}
