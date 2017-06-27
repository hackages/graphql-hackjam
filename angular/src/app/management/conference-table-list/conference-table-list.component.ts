import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conference} from '../../conference/types';
import {Apollo} from 'apollo-angular';
import {deleteConference, getAllConferences, getAllConferencesResponse} from '../management.apollo-query';
import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../table.config';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-conference-table-list',
  templateUrl: './conference-table-list.component.html',
  styles: []
})
export class ConferenceTableListComponent implements OnInit, OnDestroy {

  conferences: [Conference];
  amountPerPage = DEFAULT_ITEMS_PER_PAGE;
  total = 0;
  pageNumber = START_PAGE;
  subscriptions: Subscription[] = [];

  constructor(
  ) {
    this.deleteConference = this.deleteConference.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getConferencesChunk();
  }

  navigateToPage(pageNumber) {
    this.getConferencesChunk(pageNumber);
  }

  getConferencesChunk(pageNumber= 1) {
    this.subscriptions = this.subscriptions.concat(
      //TODO getAllConferences
      Observable.empty()
      .subscribe(({data}) => {
        this.conferences = data.conferences;
        this.total = 0//TODO;
        this.pageNumber = pageNumber;
      })
    );
  }

  deleteConference(id) {
    this.subscriptions = this.subscriptions.concat(
      //TODO call delete conference and then get all conferences
      Observable.empty()
    .subscribe(({data}) => {
      this.conferences = data.conferences;
      this.total = 0; //TODO
      this.pageNumber = 1;
    })
    );
  }

  ngOnDestroy() {
    unsubscribeAll(this.subscriptions);
  }

}
