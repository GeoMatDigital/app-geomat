import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private toastCtrl: ToastController) {
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
    this.viewCtrl.dismiss(this.feedbackForm.value);
    let toast = this.toastCtrl.create({
      message: 'Feedback wurde hypotetisch an den Server gesendet.',
      duration: 3000,
      position: 'botton',
      showCloseButton: true,
      closeButtonText: 'Schließen'
    });
    toast.present();
  }

  closeFeedback() {
    this.viewCtrl.dismiss();
  }

}
