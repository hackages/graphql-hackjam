import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeakerDetailsComponent} from './speaker-details/speaker-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SpeakerDetailsComponent
  ],
  exports: [
    SpeakerDetailsComponent
  ]
})
export class SpeakerModule {}
