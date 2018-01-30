import {Component, Input} from '@angular/core';
import {Conference} from '../../../conference/types';

@Component({
  selector: '[cp-conference-table-row]',
  templateUrl: './conference-table-row.component.html'
})
export class ConferenceTableRow {

  @Input()
  conference: Conference;

  @Input()
  deleteConference;
}
