import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {login, loginResponse} from '../authentication.apollo-query';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy{

  userNotFound = false;
  showSuccessModal = false;
  publicName: string;

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
  });

  subscriptions: Subscription[] = [];

  constructor(
  ) {}

  login() {
    this.subscriptions = this.subscriptions.concat(
      //TODO call login mutation
      Observable.empty()
      .subscribe(res => {
        this.showSuccessModal = true;
        this.userNotFound = false;
        //TODO Assign publicName
        this.publicName = undefined;
      }, error => {
        this.userNotFound = true;
      })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
