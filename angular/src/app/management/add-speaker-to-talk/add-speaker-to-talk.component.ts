import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Speaker} from '../../speaker/types';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'cp-add-speaker-to-talk',
  templateUrl: './add-speaker-to-talk.component.html'
})
export class AddSpeakerToTalkComponent implements OnInit, OnDestroy {

  speakerOnTalk: Speaker;
  speakers: [Speaker];
  talkIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.talkIdParam = this.route.snapshot.params['id'];
    this.addSpeaker = this.addSpeaker.bind(this);
    this.deleteSpeaker = this.deleteSpeaker.bind(this);
  }

  ngOnInit() {
    this.getSpeakersAndSpeakersOnTalk();
  }

  getSpeakersAndSpeakersOnTalk() {
    // TODO: Write getSpeakers and execute it
    const getSpeakers$ = Observable.empty().subscribe(({ data }) => {
      this.speakers = data.speakers;
      this.speakerOnTalk = this.getSpeakerOnTalk(data.speakers);
    });

    this.subscriptions = this.subscriptions.concat(getSpeakers$);
  }

  getSpeakerOnTalk(speakers: Speaker[]): Speaker {
    return speakers.find(speaker => {
      return speaker.talks.some(talk => talk.id === this.talkIdParam);
    });
  }

  addSpeaker(speakerId) {
    // TODO: Write updateTalkSpeaker and execute it
    const updateTalkSpeaker$ = Observable.empty().subscribe(_ => {
      this.speakerOnTalk = this.speakers.find(speaker => speaker.id === speakerId);
    });

    this.subscriptions = this.subscriptions.concat(updateTalkSpeaker$);
  }

  deleteSpeaker() {
    // TODO: Execute updateTalkSpeaker
    const updateTalkSpeaker$ = Observable.empty().subscribe(_ => {
      this.speakerOnTalk = null;
    });

    this.subscriptions = this.subscriptions.concat(updateTalkSpeaker$);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
