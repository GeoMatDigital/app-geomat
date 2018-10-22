import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;
  @Input('question') question;
  @Input('total_questions') total_questions;

  constructor() {

  }

}
