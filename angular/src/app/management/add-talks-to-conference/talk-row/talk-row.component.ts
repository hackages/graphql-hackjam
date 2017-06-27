import {Component, Input} from '@angular/core';
import {Talk} from '../../../talk/types';

@Component({
  selector: 'cp-talk-row',
  templateUrl: './talk-row.component.html'
})
export class TalkRowComponent {

  @Input()
  attending: boolean;

  @Input()
  talk: Talk;

  @Input()
  onClick;

}
