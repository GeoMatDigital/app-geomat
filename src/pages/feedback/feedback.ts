import { Component, OnInit } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * andling the feedback-feature
 */
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage implements OnInit {
  /**
   * Stores the feedback-form
   */
  feedbackForm: FormGroup;

  /**
   * constructor()
   * @param viewCtrl - stores controller for feedback-form
   * @param navParams - stores controller for retreiving nav-params
   * @param toastCtrl - stores controller for handling taost-messages
   */
  constructor(public viewCtrl: ViewController, private toastCtrl: ToastController) {
  }

  /**
   *initialize form of feedback
   */
  ngOnInit() {
    let name = null;
    let email = null;
    let typeOfEmail = null;
    let title = null;
    let description = null;
    this.feedbackForm = new FormGroup({
      'name':new FormControl(name),
      'email': new FormControl(email),
      'typeOfEmail': new FormControl(typeOfEmail),
      'title': new FormControl(title),
      'description': new FormControl(description, Validators.required)
    });
  }

  /**
   *Function to retreive user-data and make it ready to send it to the server
   */
  sendFeedback() {
    this.viewCtrl.dismiss(this.feedbackForm.value);
    let toast = this.toastCtrl.create({
      message: 'Feedback wurde hypothetisch an den Server gesendet.',
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
