import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';
import {Talk} from '../../talk/types';
import 'rxjs/add/observable/empty';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-add-talks-to-conference',
  templateUrl: './add-talks-to-conference.component.html'
})
export class AddTalksToConferenceComponent implements OnInit, OnDestroy {
  talksOnConference: Talk[] = [];
  talks: Talk[] = [];
  conferenceIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.conferenceIdParam = this.route.snapshot.params['id'];
    this.addTalk = this.addTalk.bind(this);
    this.deleteTalk = this.deleteTalk.bind(this);
  }

  ngOnInit() {
    this.getTalksAndTalksOnConference();
  }

  getTalksAndTalksOnConference() {
    // TODO: Write getTalksOnConference and execute it
    const getTalksOnConference$ = Observable.empty().subscribe(({ data }) => {
      this.talks = data.talks;
      this.talksOnConference = this.getTalksOnConference(data.talks);
    });

    this.subscriptions = this.subscriptions.concat(getTalksOnConference$);
  }

  getTalksOnConference(talks: Talk[] = []): Talk[] {
    return talks.filter(talk => {
      return talk.conferences.some(conference => conference.id === this.conferenceIdParam);
    });
  }

  addTalk(talkId) {
    // TODO: Write updateTalksOnConference and execute it
    const updateTalksOnConference$ = Observable.empty().subscribe(_ => {
      const talkToAdd = this.talks.find(talk => talk.id === talkId);
      this.talksOnConference = this.talksOnConference
        .concat(this.talksOnConference.includes(talkToAdd) ? [] : talkToAdd);
    });

    this.subscriptions = this.subscriptions.concat(updateTalksOnConference$);
  }

  deleteTalk(talkId: string) {
    // TODO: Execute updateTalksOnConference
    const updateTalksOnConference$ = Observable.empty().subscribe(_ => {
      this.talksOnConference = this.talksOnConference
        .filter(talk => talk.id !== talkId);
    });

    this.subscriptions = this.subscriptions.concat(updateTalksOnConference$);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
