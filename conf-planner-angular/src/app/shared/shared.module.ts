import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SpeakerCardComponent} from './speaker-card/speaker-card.component';
import {TalkCardComponent} from './talk-card/talk-card.component';
import {SuccessModal} from './success-modal/success-modal.component';
import {PageHeaderComponent} from "app/shared/page-header/page-header.component";
import {TableComponent} from './table/table.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SpeakerCardComponent,
    TalkCardComponent,
    SuccessModal,
    PageHeaderComponent,
    TableComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SpeakerCardComponent,
    TalkCardComponent,
    SuccessModal,
    PageHeaderComponent,
    TableComponent
  ]
})
export class SharedModule {
}
