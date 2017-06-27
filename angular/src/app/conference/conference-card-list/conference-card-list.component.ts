import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Conference} from '../types';
import {AllConferencesQuery, AllConferencesQueryResponse} from '../conference.apollo-query';
import {chunk, unsubscribeAll} from '../../utils';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-conference-card-list',
  templateUrl: './conference-card-list.component.html',
  styles: []
})
export class ConferenceCardListComponent implements OnInit, OnDestroy {

  loading: boolean;
  allConferences: Conference[][];
  subscriptions: Subscription[] = [];

  constructor(

  ) {
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      //TODO write query to get conference cards
      Observable.empty()
      .subscribe(({ data }) => {
        this.loading = data.loading;
        //TODO assign conferences getting back from graph.cool
        //Use the chunk util to have consistent columns and rows
      })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
