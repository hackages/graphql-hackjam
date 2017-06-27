import {Component, OnDestroy} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {registerUser} from '../authentication.apollo-query';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'cp-register-component',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnDestroy{
  showModalSuccess= false;
  publicName: string;
  alreadyExist = false;
  subscriptions: Subscription[] = [];

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    publicName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    picture: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.pattern(/^http/)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.maxLength(250), (control: FormControl) => this.validatePasswordConfirmation(control, this)]),
    bio: new FormControl('', [Validators.required]),

  });

  constructor(

  ) {
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
  }

  submit() {
    const {passwordConfirmation, ...userData} = this.registerForm.value;

    this.subscriptions = this.subscriptions.concat(
      //TODO call register mutation
      Observable.empty()
      .subscribe((res) => {
        this.alreadyExist = false;
        this.showModalSuccess = true;
        //TODO assign publicName (twweter handle)
        this.publicName = undefined;
      }, error => {
        this.alreadyExist = true;
      })
    );
  }

  validatePasswordConfirmation(control: FormControl, self: any): ValidationErrors | null {
    if(control.parent && control.parent.get('password').value && control.value === control.parent.get('password').value)
    return null;
    return {
      confirmPassword: true
    };
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
