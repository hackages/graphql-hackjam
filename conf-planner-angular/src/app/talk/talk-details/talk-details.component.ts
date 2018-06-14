import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {unsubscribeAll} from '../../utils';
import {Talk} from '../types';
import { Subscription, from } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'cp-talk-details',
  templateUrl: './talk-details.component.html'
})
export class TalkDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  talk: Talk;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.getTalkDetails = this.getTalkDetails.bind(this);
  }

  ngOnInit() {
    const getTalkDetails$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(this.getTalkDetails))
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.talk = data.talk;
      });

    this.subscriptions = this.subscriptions.concat(getTalkDetails$);
  }

  getTalkDetails(talkId: string) {
    return from("");
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
