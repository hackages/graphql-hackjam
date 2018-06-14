import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conference} from '../../conference/types';
import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../table.config';
import {unsubscribeAll} from '../../utils';
import { Subscription, from } from 'rxjs';
import { switchMap} from 'rxjs/operators';

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

  constructor() {
    this.deleteConference = this.deleteConference.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getConferencesChunk();
  }

  navigateToPage(pageNumber) {
    this.getConferencesChunk(pageNumber);
  }

  getAllConferences(pageNumber = 1) {
    // TODO: Write getAllConferences and execute it
    return from("");
  }

  getConferencesChunk(pageNumber = 1) {
    const getAllConferences$ = this.getAllConferences(pageNumber).subscribe(({ data }) => {
      this.conferences = data.conferences;
      this.total = data._allConferencesMeta.count;
      this.pageNumber = pageNumber;
    });

    this.subscriptions = this.subscriptions.concat(getAllConferences$);
  }

  deleteConference(id) {
    // TODO: Write deleteConference and execute it
    const deleteConference$ = from("").pipe(
      switchMap(_ => this.getAllConferences()))
      .subscribe(({ data }) => {
        this.conferences = data.conferences;
        this.total = data._allConferencesMeta.count;
        this.pageNumber = 1;
      });

    this.subscriptions = this.subscriptions.concat(deleteConference$);
  }

  ngOnDestroy() {
    unsubscribeAll(this.subscriptions);
  }

}
