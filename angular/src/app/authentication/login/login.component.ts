import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'cp-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  userNotFound = false;
  publicName: string;
  loginForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  login(values: { email: string, password: string }) {

    // TODO: Write LoginMutation and execute it
    const loginMutation$ = Observable.empty()
      .subscribe(({ data }) => {
        this.userNotFound = false;
        this.publicName = data.signinUser.user.publicName;
        this.storePublicNameInLocalStorage(this.publicName);
        this.navigateToHome();
      }, error => {
        this.userNotFound = true;
      });

    this.subscriptions = this.subscriptions.concat(loginMutation$);
  }

  storePublicNameInLocalStorage(name: string) {
    localStorage.setItem('cp-public-name', name);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
