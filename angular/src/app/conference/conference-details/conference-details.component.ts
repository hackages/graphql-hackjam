import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conference} from '../types';
import {Apollo} from 'apollo-angular';
import {DetailedConferenceQuery, DetailedConferenceQueryResponse} from '../conference.apollo-query';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {chunk, unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'cp-conference-details',
  templateUrl: './conference-details.component.html',
  styles: []
})
export class ConferenceDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  conference: Conference;

  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.getConferenceDetails = this.getConferenceDetails.bind(this);
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      this.route.paramMap
        .map((params: ParamMap) => params.get('id'))
        .switchMap(this.getConferenceDetails)
        .subscribe(res => {
          //Get the data from graphQL
          //Loading and conference.
          //You should calculate speakerCount,
          //Use the chunk util on talks and speakers to create columns and rows appropriately
        })
    );
  }

  getConferenceDetails(conferenceId: String) {
    //TODO  call the graphQL query with apollo
    //The query is in conference.apollo-query.ts
    return Observable.empty();
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
