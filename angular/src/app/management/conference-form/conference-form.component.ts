import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {addConference, getConferenceResponse, updateConference} from '../management.apollo-query';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {dateToInput, unsubscribeAll} from '../../utils';
import 'rxjs/add/operator/filter';
import {Subscription} from 'rxjs/Subscription';
import {ConferenceFormValidators} from './conference-form.validators';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';


@Component({
  selector: 'cp-conference-form',
  templateUrl: './conference-form.component.html'
})
export class ConferenceFormComponent implements OnInit, OnDestroy {

  idParam: String;
  showModalSuccess = false;
  subscriptions: Subscription[] = [];

  conferenceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.setupConferenceForm();
    this.getConference = this.getConference.bind(this);
    // Getting the id params for you
    this.idParam = this.route.snapshot.params['id'];
  }

  ngOnInit() {

    const getConference$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .filter((idParam: string) => !!idParam)
      .switchMap(this.getConference)
      .subscribe(({ data }) => {
        this.updateConferenceForm(data);
      });

    this.subscriptions = this.subscriptions.concat(getConference$);
  }

  setupConferenceForm() {
    this.conferenceForm = this.fb.group({
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      startDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/), ConferenceFormValidators.isBeforeEndDate]],
      endDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/), ConferenceFormValidators.isAfterStartDate]],
      logo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250),
        Validators.pattern(/^http/)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      website: ['', [Validators.minLength(10), Validators.maxLength(250),
        Validators.pattern(/^http/)]],
    });
  }

  updateConferenceForm(data: getConferenceResponse) {
    this.conferenceForm.patchValue({
      ...data.conference,
      startDate: dateToInput(data.conference.startDate),
      endDate: dateToInput(data.conference.endDate)
    });
  }

  dateInputToDate(dateInput) {
    return new Date(dateInput.slice(-4), dateInput.slice(3, 5), dateInput.slice(0, 2));
  }

  getConference(id) {
    // TODO: Write getConference and execute
    return Observable.empty();
  }

  submitConference($event) {
    $event.preventDefault();

    // TODO: Write updateConference & addConference and execute it
    const mutation = this.idParam ? updateConference : addConference;

    const updateOrAdd$ = Observable.empty().subscribe(_ => {
      this.showModalSuccess = true;
    }, err => console.log(err));

    this.subscriptions = this.subscriptions.concat(updateOrAdd$);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
