import {Component, Input, OnInit} from '@angular/core';
import {Conference} from '../../types';

@Component({
  selector: 'cp-conference-card',
  templateUrl: './conference-card.component.html',
  styles: []
})
export class ConferenceCardComponent implements OnInit {

  @Input()
  conference: Conference;

  constructor() {
  }

  ngOnInit() {
  }

  getConferenceCountryLogo(isoCountryCode: string) {
    return `https://restcountries.eu/data/${isoCountryCode && isoCountryCode.toLocaleLowerCase()}.svg`;
  }
}
