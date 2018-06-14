import {Component, Input} from '@angular/core';
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
