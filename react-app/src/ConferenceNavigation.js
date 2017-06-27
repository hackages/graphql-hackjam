import React from 'react';
import {Route} from 'react-router-dom';
import Conferences from './component/conference/Conferences';
import ConferenceDetails from './component/conference/ConferenceDetails';
import TalkDetails from './component/talk/TalkDetails';
import SpeakerDetails from './component/speaker/SpeakerDetails';
import SecureAddConference from './component/management/conference/Conference';
import SecureAddSpeakerOnTalk from './component/management/speaker/AddSpeakerToTalk';
import ConferenceManagementBoard from './component/management/conference/ConferenceManagementBoard';
import TalkManagementBoard from './component/management/talks/TalkManagementBoard';
import SecureAddOrUpdateTalk from './component/management/talks/Talk';
import SecureAddTalksOnConference from './component/management/talks/AddTalksToConference';

const ConferenceNavigation = (props) => {
  const {history: {push}, location: {pathname}} = props;
  return <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title">
                Conference planner
              </p>
              <p className="subtitle">
                The <strong>ultimate </strong> conference planner in town
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <nav className="tabs is-boxed">
            <ul>
              <li className={pathname === '/' ? 'is-active' : ''}>
                <a
                  onClick={() => push('/')}
                >Conferences</a>
              </li>
              <li
                className={pathname === '/secure/conferences' ? 'is-active' : ''}>
                <a
                  onClick={() => push('/secure/conferences')}
                >Conference Management</a>
              </li>
              <li
              className={pathname === '/secure/talks' ? 'is-active' : ''}>
                <a
                  onClick={() => push('/secure/talks')}
                >Talks management</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

      <Route exact path="/" component={Conferences}/>
      <Route path="/conference/:id" component={ConferenceDetails}/>
      <Route path="/talk/:id" component={TalkDetails}/>
      <Route path="/speaker/:id" component={SpeakerDetails}/>
      <Route exact path="/secure/conferences" component={ConferenceManagementBoard}/>
      <Route exact path="/secure/conference/:id?" component={SecureAddConference}/>
      <Route path="/secure/talks" component={TalkManagementBoard}/>
      <Route exact path="/secure/talk/:id?" component={SecureAddOrUpdateTalk}/>
      <Route path="/secure/talk/:id/speakers" component={SecureAddSpeakerOnTalk}/>
      <Route path="/secure/conference/:id/talks" component={SecureAddTalksOnConference}/>
    </div>;
};

export default ConferenceNavigation;