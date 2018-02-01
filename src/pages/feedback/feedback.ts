import { Component, OnInit } from '@angular/core';
import { ViewController} from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { EmailComposer } from '@ionic-native/email-composer';
import {Http, Headers, RequestOptions} from '@angular/http';



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
   * @param http - used to communicate with backend over http
   */


  constructor(public viewCtrl: ViewController, private http: Http) {
  }


  /**
   *initialize form of feedback
   */
  ngOnInit() {
    let username = null;
    let userEmail = null;
    let emailTitle = null;
    let emailContent = null;
    this.feedbackForm = new FormGroup({
      'username':new FormControl(username),
      'userEmail': new FormControl(userEmail),
      'emailTitle': new FormControl(emailTitle),
      'emailContent': new FormControl(emailContent, Validators.required)
    });
    /*this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send

        let toast = this.toastCtrl.create({
          message: 'Ihr System blockiert das Senden einer E-Mail. Bitte senden Sie die E-Mail manuel an: ',
          duration: 3000,
          position: 'botton',
          showCloseButton: true,
          closeButtonText: 'Schließen'
        });      }
    });*/
  }


  /**
   *Function to retreive user-data and make it ready to send it to the server
   */
  sendFeedback() {

    this.viewCtrl.dismiss(this.feedbackForm.value);
    let body = JSON.stringify(this.feedbackForm.value);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${process.env.API_URL}/feedback`, body, options)
      .subscribe(data => {
        alert('ok');
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
    //  .then(function successCallback(response) {
    //   alert("msg sent!");
    // }, function errorCallback(response) {
    //   alert("error with sending a msg");
    // });
    /*let toast = this.toastCtrl.create({
      message: 'Feedback wurde hypothetisch an den Server gesendet.',
      duration: 3000,
      position: 'botton',
      showCloseButton: true,
      closeButtonText: 'Schließen'
    });
    toast.present();*/
  }

  closeFeedback() {
    this.viewCtrl.dismiss();
  }

}
