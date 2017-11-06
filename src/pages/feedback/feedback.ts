import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ngOnInit() {
    let title = null;
    let description = null;
    this.feedbackForm = new FormGroup({
      'title': new FormControl(title),
      'description': new FormControl(description, Validators.required)
    });
  }

  sendFeedback() {
    console.log(this.feedbackForm.value);
    this.viewCtrl.dismiss(this.feedbackForm.value);
  }

  closeFeedback() {
    this.viewCtrl.dismiss();
  }

}
