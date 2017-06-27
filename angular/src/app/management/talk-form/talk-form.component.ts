import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {timeToInput, unsubscribeAll} from '../../utils';
import 'rxjs/add/operator/filter';
import {getTalk, getTalkResponse, updateTalk, addTalk} from '../management.apollo-query';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cp-talk-form',
  templateUrl: './talk-form.component.html'
})
export class TalkFormComponent implements OnInit, OnDestroy{

  idParam: String;
  showModalSuccess = false;
  subscriptions: Subscription[] = [];

  talkForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]),
    room: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
    startsAt: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]{2}\:[0-9]{2}$/)]),
  });

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.idParam = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      this.route.paramMap
        .map((params: ParamMap) => params.get('id'))
        .filter((idParam:string)=> !!idParam)
        .switchMap((idParam:string)=>this.apollo.query<getTalkResponse>({
            query: getTalk,
            variables: {
              id: idParam
            }
          })
        )
        .subscribe(({data}) => {
          this.talkForm.patchValue({
            ...data.talk,
            startsAt: timeToInput(data.talk.startsAt)
          });
        })
    );
  }


  submitTalk() {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: this.idParam ? updateTalk : addTalk,
        variables: {
          ...this.talkForm.value,
          id: this.idParam,
          startsAt: new Date(1990, 1, 1,  this.talkForm.get('startsAt').value.slice(0,
            this.talkForm.get('startsAt').value.indexOf(':')),
            this.talkForm.get('startsAt').value.slice(this.talkForm.get('startsAt').value.indexOf(':') + 1))
        }
      })
        .subscribe(({data}) => {
          this.showModalSuccess = true;
        })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
