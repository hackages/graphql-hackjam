import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {addConference, getConference, getConferenceResponse, updateConference} from '../management.apollo-query';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {dateToInput, unsubscribeAll} from '../../utils';
import 'rxjs/add/operator/filter';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cp-conference-form',
  templateUrl: './conference-form.component.html'
})
export class ConferenceFormComponent implements OnInit, OnDestroy{

  idParam: String;
  showModalSuccess = false;
  subscriptions: Subscription[] = [];

  conferenceForm = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    startDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/), this.isBeforeEndDate]),
    endDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/), this.isAfterStartDate]),
    logo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(250), Validators.pattern(/^http/)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    website: new FormControl('', [Validators.minLength(10), Validators.maxLength(250),  Validators.pattern(/^http/)]),
  });

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.isBeforeEndDate = this.isBeforeEndDate.bind(this);
    this.isAfterStartDate = this.isAfterStartDate.bind(this);
    this.idParam = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      this.route.paramMap
        .map((params: ParamMap) => params.get('id'))
        .filter((idParam:string)=> !!idParam)
        .switchMap((idParam:string)=>this.apollo.query<getConferenceResponse>({
            query: getConference,
            variables: {
              id: idParam
            }
          })
        )
        .subscribe(({data}) => {
          this.conferenceForm.patchValue({
            ...data.conference,
            startDate: dateToInput(data.conference.startDate),
            endDate: dateToInput(data.conference.endDate)
          });
        })
    );
  }

  dateInputToDate(dateInput) {
    return new Date(dateInput.slice(-4), dateInput.slice(3, 5), dateInput.slice(0, 2));
  }

  submitConference() {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: this.idParam ? updateConference : addConference,
        variables: {
          ...this.conferenceForm.value,
          id: this.idParam,
          startDate: this.dateInputToDate(this.conferenceForm.get('startDate').value),
          endDate: this.dateInputToDate(this.conferenceForm.get('endDate').value)
        }
      })
      .subscribe(({data}) => {
        this.showModalSuccess = true;
      })
    );
  }

  isBeforeEndDate(control: FormControl) {
    //If no end date OK
    if(control && control.parent && !control.parent.get('endDate').value)
      return null;

    if(control && control.parent &&
      (new Date(control.value) < new Date(control.parent.get('endDate').value))
    ) {
        return null;
    }

    return {
      startDate: true
    };
  }

  isAfterStartDate(control: FormControl) {
    // Valid if no start date
    if(control && control.parent && !control.parent.get('startDate').value)
      return null;

    // Valid if start date is before end date
    if(control && control.parent &&
      new Date(control.value) > new Date(control.parent.get('startDate').value)) {
        return null;
    }

    return {
      endDate: true
    };
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
