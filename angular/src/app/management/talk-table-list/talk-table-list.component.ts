import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {DEFAULT_ITEMS_PER_PAGE, START_PAGE} from '../../table.config';
import {getAllTalksResponse, getAllTalks, deleteTalk} from 'app/management/management.apollo-query';
import {Talk} from '../../talk/types';
import {Subscription} from 'rxjs/Subscription';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';

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
  private subscriptions:Subscription[]=[];

  constructor(private apollo: Apollo) {
    this.deleteTalk = this.deleteTalk.bind(this);
    this.navigateToPage = this.navigateToPage.bind(this);
  }

  ngOnInit() {
    this.getTalksChunk();
  }

  navigateToPage(pageNumber) {
    this.getTalksChunk(pageNumber);
  }

  getTalksChunk(pageNumber = 1) {
    this.subscriptions = this.subscriptions.concat(
      //TODO call get all talks
      Observable.empty()
      .subscribe(({data}) => {
        this.talks = data.talks;
        this.total = 0; //TODO
        this.pageNumber = pageNumber;
      })
    );
  }

  deleteTalk(id) {
    this.subscriptions = this.subscriptions.concat(
      //TODO call delete talk and get all talks after
      Observable.empty()
      .subscribe(({data}) => {
        this.talks = data.talks;
        this.total = 0; //TODO
        this.pageNumber = 1;
      })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
