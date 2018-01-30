import {NgModule} from '@angular/core';
import {SpeakerDetailsComponent} from './speaker-details/speaker-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SpeakerDetailsComponent
  ],
  exports: [
    SpeakerDetailsComponent
  ]
})
export class SpeakerModule {
}
