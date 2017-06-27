import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {getSpeakers, getSpeakersResponse, updateTalkSpeaker} from '../management.apollo-query';
import {ActivatedRoute} from '@angular/router';
import {Speaker} from '../../speaker/types';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-add-speaker-to-talk',
  templateUrl: './add-speaker-to-talk.component.html'
})
export class AddSpeakerToTalkComponent implements OnInit, OnDestroy{

  speakerOnTalk: Speaker;
  speakers: [Speaker];
  talkIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.talkIdParam = this.route.snapshot.params['id'];
    this.addSpeaker = this.addSpeaker.bind(this);
    this.deleteSpeaker = this.deleteSpeaker.bind(this);
  }

  ngOnInit() {
    this.getSpeakersAndSpeakersOnTalk();
  }

  getSpeakersAndSpeakersOnTalk() {
    this.subscriptions = this.subscriptions.concat(
      //TODO call the get speakers query
      Observable.empty()
        .subscribe(({ data }) => {
          this.speakers = data.speakers;
          this.speakerOnTalk = undefined;
        })
    );
  }

  addSpeaker(speakerId) {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: updateTalkSpeaker,
        variables: {
          speakerId,
          talkId: this.talkIdParam
        }
      })
        .subscribe(_ => {
          this.getSpeakersAndSpeakersOnTalk();
        })
    );
  }

  deleteSpeaker() {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: updateTalkSpeaker,
        variables: {
          speakerId: null,
          talkId: this.talkIdParam
        }
      })
        .subscribe(_ => {
          this.getSpeakersAndSpeakersOnTalk();
        })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
