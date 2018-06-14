import {NgModule} from '@angular/core';
import {ConferenceTableListComponent} from './conference-table-list/conference-table-list.component';
import {SharedModule} from '../shared/shared.module';
import {ConferenceFormComponent} from './conference-form/conference-form.component';
import {ConferenceTableRow} from 'app/management/conference-table-list/conference-table-row/conference-table-row.component';
import {TalkTableListComponent} from './talk-table-list/talk-table-list.component';
import {TalkTableRow} from './talk-table-list/talk-table-row/talk-table-row.component';
import {TalkFormComponent} from './talk-form/talk-form.component';
import {SpeakerRowComponent} from './add-speaker-to-talk/speaker-row/speaker-row.component';
import {AddSpeakerToTalkComponent} from './add-speaker-to-talk/add-speaker-to-talk.component';
import {AddTalksToConferenceComponent} from './add-talks-to-conference/add-talks-to-conference.component';
import {TalkRowComponent} from './add-talks-to-conference/talk-row/talk-row.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ConferenceTableListComponent,
    ConferenceFormComponent,
    ConferenceTableRow,
    TalkTableListComponent,
    TalkTableRow,
    TalkFormComponent,
    SpeakerRowComponent,
    AddSpeakerToTalkComponent,
    AddTalksToConferenceComponent,
    TalkRowComponent
  ],
  exports: [
    ConferenceTableListComponent,
    ConferenceFormComponent,
    TalkTableListComponent,
    TalkFormComponent,
    AddSpeakerToTalkComponent,
    AddTalksToConferenceComponent
  ]
})
export class ManagementModule {
}
