import {Component, Input} from '@angular/core';
import {Speaker} from '../../../speaker/types';

@Component({
  selector: 'cp-speaker-row',
  templateUrl: './speaker-row.component.html'
})
export class SpeakerRowComponent {

  @Input()
  attending: boolean;

  @Input()
  speaker: Speaker;

  @Input()
  onClick;

}
