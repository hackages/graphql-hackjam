import {Component, OnDestroy, OnInit} from "@angular/core";
import {Apollo} from 'apollo-angular';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {getSpeakerById, getSpeakerByIdResponse} from '../speaker.apollo-query';
import {chunk, unsubscribeAll} from '../../utils';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-speaker-details',
  templateUrl: './speaker-details.component.html'
})
export class SpeakerDetailsComponent implements OnInit, OnDestroy {

  speaker;
  loading;
  subscriptions: Subscription[] = [];

  //TODO we need access to apollo
  constructor(
    private route: ActivatedRoute
  ) {
    this.getSpeaker = this.getSpeaker.bind(this);
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      this.route.paramMap
        .map((params: ParamMap) => params.get('id'))
        .switchMap(this.getSpeaker)
        .subscribe((res) => {
          // Assign loading
          // assign speaker (use the chunk utility to have consistent columns and rows)
        })
    );
  }

  getSpeaker(speakerId: string) {
    //TODO call get speaker by id query
    return Observable.empty()
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
