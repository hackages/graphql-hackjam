import {NgModule} from '@angular/core';
import {TalkDetailsComponent} from './talk-details/talk-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TalkDetailsComponent,
  ],
  exports: [
    TalkDetailsComponent
  ]
})
export class TalkModule {
}
