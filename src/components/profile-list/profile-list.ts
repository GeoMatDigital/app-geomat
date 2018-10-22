import { Component } from '@angular/core';
import {NewProfileserviceProvider} from "../../providers/new-profileservice/new-profileservice";

/**
 * Generated class for the ProfileListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-list',
  templateUrl: 'profile-list.html'
})
export class ProfileListComponent {

  text: string;
  profiles: any[];

  constructor(public profileProvider: NewProfileserviceProvider) {
    console.log('Hello ProfileListComponent Component');
    this.text = 'Hello World';
    this.profiles = profileProvider.profile_data[0];
  }

}
