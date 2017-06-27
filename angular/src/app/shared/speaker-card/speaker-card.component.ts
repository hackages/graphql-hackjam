import {Component, Input, OnInit} from '@angular/core';
import {Speaker} from '../../speaker/types';

@Component({
  selector: 'cp-speaker-card',
  templateUrl: './speaker-card.component.html',
  styles: []
})
export class SpeakerCardComponent implements OnInit {
  @Input()
  speaker: Speaker;

  constructor() {
  }

  ngOnInit() {
  }

}
