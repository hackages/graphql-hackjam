import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {getSpeakerByIdResponse} from '../speaker.apollo-query';
import {chunk, unsubscribeAll} from '../../utils';
import {Speaker} from '../types';
import { Subscription, from } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'cp-speaker-details',
  templateUrl: './speaker-details.component.html'
})
export class SpeakerDetailsComponent implements OnInit, OnDestroy {

  speaker: Speaker;
  loading;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.getSpeaker = this.getSpeaker.bind(this);
  }

  ngOnInit() {
    const getSpeaker$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(this.getSpeaker))
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.speaker = this.updateSpeaker(data);
      });

    this.subscriptions = this.subscriptions.concat(getSpeaker$);
  }

  getSpeaker(speakerId: string) {
    // TODO: Write getSpeakerById and execute it
    return from("");
  }

  updateSpeaker(data: getSpeakerByIdResponse): Speaker {
    return Object.assign({},
      ...data.speaker,
      {
        talks: chunk(data.speaker.talks, 2)
      }
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
