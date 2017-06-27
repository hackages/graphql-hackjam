import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConferenceTableListComponent} from './conference-table-list/conference-table-list.component';
import {SharedModule} from '../shared/shared.module';
import {ConferenceFormComponent} from './conference-form/conference-form.component';
import {RouterModule} from '@angular/router';
import {ConferenceTableRow} from 'app/management/conference-table-list/conference-table-row/conference-table-row.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TalkTableListComponent} from './talk-table-list/talk-table-list.component';
import {TalkTableRow} from './talk-table-list/talk-table-row/talk-table-row.component';
import {TalkFormComponent} from './talk-form/talk-form.component';
import {SpeakerRowComponent} from './add-speaker-to-talk/speaker-row/speaker-row.component';
import {AddSpeakerToTalkComponent} from './add-speaker-to-talk/add-speaker-to-talk.component';
import {AddTalksToConference} from './add-talks-to-conference/add-talks-to-conference.component';
import {TalkRowComponent} from './add-talks-to-conference/talk-row/talk-row.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
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
    AddTalksToConference,
    TalkRowComponent
  ],
  exports: [
    ConferenceTableListComponent,
    ConferenceFormComponent,
    TalkTableListComponent,
    TalkFormComponent,
    AddSpeakerToTalkComponent,
    AddTalksToConference
  ]
})
export class ManagementModule {}
