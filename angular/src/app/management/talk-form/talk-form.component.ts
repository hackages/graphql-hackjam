import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {timeToInput, unsubscribeAll} from '../../utils';
import 'rxjs/add/operator/filter';
import {addTalk, getTalkResponse, updateTalk} from '../management.apollo-query';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/empty';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-talk-form',
  templateUrl: './talk-form.component.html'
})
export class TalkFormComponent implements OnInit, OnDestroy {

  idParam: String;
  showModalSuccess = false;
  subscriptions: Subscription[] = [];

  talkForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {

    this.setupForm();
    this.getTalk = this.getTalk.bind(this);
    this.idParam = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const getTalk$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .filter((idParam: string) => !!idParam)
      .switchMap(this.getTalk)
      .subscribe(({ data }) => {
        this.updateTalkForm(data);
      });

    this.subscriptions = this.subscriptions.concat(getTalk$);
  }

  getTalk(id) {
    // TODO: Write getTalk and execute it
    return Observable.empty();
  }

  setupForm() {
    this.talkForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      room: ['', [Validators.minLength(2), Validators.maxLength(20)]],
      startsAt: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5),
        Validators.pattern(/^[0-9]{2}\:[0-9]{2}$/)]],
    });
  }

  updateTalkForm(data: getTalkResponse) {
    this.talkForm.patchValue({
      ...data.talk,
      startsAt: timeToInput(data.talk.startsAt)
    });
  }


  submitTalk($event) {
    $event.preventDefault();
    const mutation = this.idParam ? updateTalk : addTalk;

    // TODO: Write updateTalk and updateTalk, execute it
    const submitTalk$ = Observable.empty().subscribe(({ data }) => {
      this.showModalSuccess = true;
    });

    this.subscriptions = this.subscriptions.concat(submitTalk$);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
