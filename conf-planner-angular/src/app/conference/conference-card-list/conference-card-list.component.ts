import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conference} from '../types';
import {chunk, unsubscribeAll} from '../../utils';
import {Observable, Subscription, empty} from 'rxjs';

@Component({
  selector: 'cp-conference-card-list',
  templateUrl: './conference-card-list.component.html',
  styles: []
})
export class ConferenceCardListComponent implements OnInit, OnDestroy {

  loading: boolean;
  allConferences: Conference[];
  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit() {
    // TODO: Write AllConferencesQuery in conference.apollo-query.ts and execute it
    const allConferences$ = empty().subscribe(({ data }) => {
      this.loading = data.loading;
      this.allConferences = data.allConferences;
    });

    this.subscriptions = this.subscriptions.concat(allConferences$);
  }

  chunkConferences(conferences: Conference[] = []): Conference[][] {
    return chunk(conferences, 3);
  }

  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
