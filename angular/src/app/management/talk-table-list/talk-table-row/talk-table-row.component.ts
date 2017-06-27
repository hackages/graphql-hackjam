import {Component, Input} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Conference} from '../../../conference/types';
import {Talk} from '../../../talk/types';

@Component({
  selector: '[cp-talk-table-row]',
  templateUrl: './talk-table-row.component.html'
})
export class TalkTableRow {

  @Input()
  talk: Talk;

  @Input()
  deleteTalk;
}
