import {Component, OnDestroy, OnInit} from '@angular/core';
import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../table.config';
import {Talk} from '../../talk/types';
import {unsubscribeAll} from '../../utils';
import {Subscription, from} from 'rxjs';
import {switchMap, switchMapTo} from 'rxjs/operators';

@Component({
  selector: 'cp-talk-table-list',
  templateUrl: './talk-table-list.component.html',
  styles: []
})
export class TalkTableListComponent implements OnInit, OnDestroy {

  talks: [Talk];
  amountPerPage = DEFAULT_ITEMS_PER_PAGE;
  total = 0;
  pageNumber = START_PAGE;
  private subscriptions: Subscription[] = [];

  constructor() {
    this.deleteTalk = this.deleteTalk.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getTalksChunk();
  }

  navigateToPage(pageNumber) {
    this.getTalksChunk(pageNumber);
  }

  getTalks(pageNumber = 1) {
    // TODO: Write getAllTalks and execute it
    return from("");
  }

  getTalksChunk(pageNumber = 1) {
    const getAllTalks$ = this.getTalks(pageNumber).subscribe(({ data }) => {
      this.talks = data.talks;
      this.total = data._allTalksMeta.count;
      this.pageNumber = pageNumber;
    });

    this.subscriptions = this.subscriptions.concat(getAllTalks$);
  }

  deleteTalk(id) {
    // TODO: Write deleteTalk and execute it
    const deleteTalk$ = from("").pipe(switchMapTo(this.getTalks()))
      .subscribe( data => {
        this.talks = data.talks;
        this.total = data._allTalksMeta.count;
        this.pageNumber = 1;
      });
    this.subscriptions = this.subscriptions.concat(deleteTalk$);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
