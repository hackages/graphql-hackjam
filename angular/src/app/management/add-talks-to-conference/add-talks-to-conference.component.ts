import {Component, OnDestroy, OnInit} from '@angular/core';
import {Talk} from '../../talk/types';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute} from '@angular/router';
import {
  getAllTalks, getAllTalksResponse, getTalksOnConference,
  getTalksOnConferenceResponse, updateTalksOnConference
} from '../management.apollo-query';
import {Subscription} from 'rxjs/Subscription';
import {unsubscribeAll} from '../../utils';

@Component({
  selector: 'cp-add-talks-to-conference',
  templateUrl: './add-talks-to-conference.component.html'
})
export class AddTalksToConference implements OnInit, OnDestroy {
  talksOnConference = [];
  talks = [];
  conferenceIdParam: string;
  subscriptions: Subscription[] = [];

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.conferenceIdParam = this.route.snapshot.params['id'];
    this.addTalk = this.addTalk.bind(this);
    this.deleteTalk = this.deleteTalk.bind(this);
  }

  ngOnInit() {
    this.getTalksAndTalksOnConference();
  }

  getTalksAndTalksOnConference() {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.query<getTalksOnConferenceResponse>({
        query: getTalksOnConference,
        fetchPolicy: 'cache-and-network'
      })
        .subscribe(({ data }) => {
          this.talks = data.talks;
          this.talksOnConference = data.talks
            .filter(talk => {
              return talk.conferences.some(conference => conference.id === this.conferenceIdParam);
            });
        })
    );
  }

  addTalk(talkId) {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: updateTalksOnConference,
        variables: {
          conferenceId: this.conferenceIdParam,
          talkIds: this.talksOnConference
            .map(talkOnConference => talkOnConference.id)
            .concat(talkId)
        }
      })
        .subscribe(_ => {
          this.getTalksAndTalksOnConference();
        })
    );
  }

  deleteTalk(talkId) {
    this.subscriptions = this.subscriptions.concat(
      this.apollo.mutate({
        mutation: updateTalksOnConference,
        variables: {
          conferenceId: this.conferenceIdParam,
          talkIds: this.talksOnConference
            .map(talkOnConference => talkOnConference.id)
            .filter(dbTalkId => dbTalkId !== talkId)
        }
      })
        .subscribe(_ => {
          this.getTalksAndTalksOnConference();
        })
    );
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
