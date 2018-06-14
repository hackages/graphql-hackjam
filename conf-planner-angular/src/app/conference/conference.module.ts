import {NgModule} from '@angular/core';
import {ConferenceCardListComponent} from './conference-card-list/conference-card-list.component';
import {ConferenceCardComponent} from './conference-card-list/conference-card/conference-card.component';
import {ConferenceDetailsComponent} from './conference-details/conference-details.component';
import {ConferenceDetailsLevelComponent} from './conference-details/conference-details-level/conference-details-level.component';
import {SponsorBoxComponent} from './conference-details/sponsor-box/sponsor-box.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ConferenceCardListComponent,
    ConferenceCardComponent,
    ConferenceDetailsComponent,
    ConferenceDetailsLevelComponent,
    SponsorBoxComponent
  ],
  exports: [
    ConferenceCardListComponent,
    ConferenceDetailsComponent
  ]
})
export class ConferenceModule {
}
