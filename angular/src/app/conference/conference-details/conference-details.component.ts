import {Component, OnDestroy, OnInit} from '@angular/core';
import {Conference, ConferenceDetails} from '../types';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {chunk, unsubscribeAll} from '../../utils';
import {Talk} from 'app/talk/types';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'cp-conference-details',
  templateUrl: './conference-details.component.html',
  styles: []
})
export class ConferenceDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  conference: ConferenceDetails;

  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
    this.getConferenceDetails = this.getConferenceDetails.bind(this);
  }

  ngOnInit() {
    const conferenceDetails$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .switchMap(this.getConferenceDetails)
      .subscribe(() => {
        // Apollo give you back a Conference type
        // you have to convert it to the ConferenceDetails type
        // using the method 'formatConference'
      });

    this.subscriptions = this.subscriptions.concat(conferenceDetails$);
  }

  getConferenceDetails(conferenceId: String) {
    // TODO: Write DetailedConferenceQuery and execute it
    return Observable.empty();
  }

  formatConference(data: Conference): ConferenceDetails {
    return Object.assign({},
      data,
      {
        speakerCount: data.talks.reduce((acc, talk) => acc + (talk.speaker ? 1 : 0), 0) || 0,
        talks: this.formatArray(data.talks),
        speakers: this.formatArray(this.getSpeakersFromTalks(data.talks)),
      }
    );
  }

  formatArray(array: any[]) {
    return chunk(array, 2);
  }

  getSpeakersFromTalks(talks: Talk[]) {
    return talks
      .map(talk => talk.speaker)
      .filter(speaker => !!speaker);
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
