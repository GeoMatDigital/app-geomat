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

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;


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
  constructor(private _menuService: MenuService, public dataService: QuizDataProvider) {}

  /**
   * Opens requested sidemenu, deactivates others
   * @param activeMenu
   */
  openSidemenu(activeMenu) {
    this._menuService.openSidemenu(activeMenu);

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
    this.flashCardFlipped = false;
    this.hasAnswered = false;
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question){
    console.log("Test");
    /*//answer.selected = true;
    this.hasAnswered = true;
    // if (question.qtype == "Single Choice") {
    // the answer text inside the ionic card is selected
      if (answer.correct) {
        this.answerChecking = answer.feedback_correct;
      } else {
        this.answerChecking = answer.feedback_incorrect;
      }

    this.flashCardFlipped = true;

    if(answer.correct){
      this.score++;
    }

    setTimeout(() => {
      this.nextSlide();
    }, 5000)*/;
  }


  restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
  }

}
