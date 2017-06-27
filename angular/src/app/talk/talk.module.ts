import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TalkDetailsComponent} from './talk-details/talk-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TalkDetailsComponent,
  ],
  exports: [
    TalkDetailsComponent
  ]
})
export class TalkModule {}
