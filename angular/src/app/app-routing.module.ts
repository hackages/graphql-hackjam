import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConferenceCardListComponent} from './conference/conference-card-list/conference-card-list.component';
import {ConferenceDetailsComponent} from './conference/conference-details/conference-details.component';
import {ConferenceTableListComponent} from './management/conference-table-list/conference-table-list.component';
import {TalkDetailsComponent} from "./talk/talk-details/talk-details.component";
import {SpeakerDetailsComponent} from "./speaker/speaker-details/speaker-details.component";
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {ConferenceFormComponent} from './management/conference-form/conference-form.component';
import {TalkTableListComponent} from './management/talk-table-list/talk-table-list.component';
import {TalkFormComponent} from './management/talk-form/talk-form.component';
import {AddSpeakerToTalkComponent} from './management/add-speaker-to-talk/add-speaker-to-talk.component';
import {AddTalksToConferenceComponent} from './management/add-talks-to-conference/add-talks-to-conference.component';
import {AppContainerComponent} from './app-container.component';

const routes: Routes = [
  {
    path: 'authentication/login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'authentication/register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: ConferenceCardListComponent,
        pathMatch: 'full',
      },
      {
        path: 'conference/:id',
        component: ConferenceDetailsComponent,
        pathMatch: 'full'
      },
      {
        path: 'talk/:id',
        component: TalkDetailsComponent,
        pathMatch: 'full'
      },
      {
        path: 'speaker/:id',
        component: SpeakerDetailsComponent,
        pathMatch: 'full'
      },

      {
        path: 'secure/conference',
        component: ConferenceFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/conference/:id',
        component: ConferenceFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/conferences',
        component: ConferenceTableListComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/talks',
        component: TalkTableListComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/talk',
        component: TalkFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/talk/:id',
        component: TalkFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/talk/:id/speaker',
        component: AddSpeakerToTalkComponent,
        pathMatch: 'full'
      },
      {
        path: 'secure/conference/:id/talks',
        component: AddTalksToConferenceComponent,
        pathMatch: 'full'
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
