import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MenuService } from '../../services/menu';
// import { NavController } from 'ionic-angular';
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

  showAnswers: boolean = false;
  score: number = 0;
  progress_num: number;


  slideOptions: any;
  questions: any;
  flashCardFlipped: boolean = false;
  makegreen: boolean = false;
  makered: boolean = false;
  answerChecking: string = "";

  /**
   * cosntructor()
   * @param _menuService
   */
  constructor(private _menuService: MenuService, public dataService: QuizDataProvider) {

  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    this.dataService.load().then((data) => {

      data.map((question) => {

        let originalOrder = question.answers;
        question.answers = this.randomizeAnswers(originalOrder);
        return question;

      });
      this.questions = data;
    });

  }

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);

  }


  randomizeAnswers(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
    }

    return rawAnswers;

  }

  nextSlide(){
    this.showAnswers = false;
    this.slides.lockSwipes(false);
    console.log("nextSlide()");
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  lastSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
  }


  restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
  }

  // progress-bar animation
  loadProgress(curr_question_number) {
    curr_question_number = curr_question_number/84*100;

    return curr_question_number;
  }

  // answer selection method, sets value for checkAnswer method
  selectAnswer(answer, question, checkbox) {
    console.log(checkbox.checked);
    console.log("Antwor: t" + answer);
    console.log("Frage: " + question)
  }

  //check given Answer if correct or wrong
  checkAnswer(){
    return this.showAnswers = true;
  }

}
