import {Component, Input, OnInit} from '@angular/core';
import {Talk} from '../../talk/types';

@Component({
  selector: 'cp-talk-card',
  templateUrl: './talk-card.component.html',
  styles: []
})
export class TalkCardComponent implements OnInit {

  @Input()
  talk: Talk;

  constructor() {
  }

  ngOnInit() {
  }

}
