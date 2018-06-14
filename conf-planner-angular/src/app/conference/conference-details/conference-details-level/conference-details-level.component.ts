import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-conference-details-level',
  templateUrl: './conference-details-level.component.html',
  styles: []
})
export class ConferenceDetailsLevelComponent implements OnInit {
  @Input()
  speakersCount: string;

  @Input()
  attendeesCount: string;

  @Input()
  sponsorsCount: string;

  constructor() {
  }

  ngOnInit() {
  }

}
