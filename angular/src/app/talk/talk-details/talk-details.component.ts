import {Component, OnDestroy, OnInit} from "@angular/core";
import {Apollo} from "apollo-angular";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {chunk, unsubscribeAll} from "../../utils";
import {Talk} from "../types";
import {getTalkById, getTalkByIdQueryResponse} from "../talk.apollo-query";
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cp-talk-details',
  templateUrl: './talk-details.component.html'
})
export class TalkDetailsComponent implements OnInit, OnDestroy {
  loading: boolean;
  talk: Talk;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.getTalkDetails = this.getTalkDetails.bind(this);
  }

  ngOnInit() {
    this.subscriptions = this.subscriptions.concat(
      this.route.paramMap
        .map((params: ParamMap) => params.get('id'))
        .switchMap(this.getTalkDetails)
        .subscribe(res => {
          //TODO assign talk and loading
        })
    );
  }

  getTalkDetails(talkId: string) {
    //TODO write get talk by id
    return Observable.empty();
  }


  ngOnDestroy(): void {
    unsubscribeAll(this.subscriptions);
  }
}
