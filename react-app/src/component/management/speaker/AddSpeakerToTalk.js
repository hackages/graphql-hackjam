import React, {Component} from 'react';
import {compose, gql, graphql} from 'react-apollo';
import SpeakerItem from './SpeakerItem';
import {waitForGraphql} from '../../../apollo/index';
import SpeakerOverview from '../../speaker/SpeakerOverview';

class AddSpeakerToTalk extends Component {

  constructor(props) {
    super(props);
  }

  addSpeaker = (talkId, speakerId) => {
    this.props.updateSpeaker({
      variables: {
        talkId,
        speakerId: speakerId
      }
    })
    .then(_ => {
      this.refetch();
    })
  };

  deleteSpeaker = (talkId) => {
    this.props.updateSpeaker({
      variables: {
        talkId,
        speakerId: null
      }
    })
    .then(_ => {
      this.refetch();
    })
  };

  refetch = () => {
    this.props.getSpeakersOnTalk.refetch({
      id: this.props.match.params.id
    });
  };

  render() {
    const {
      getSpeakers: {
        speakers
      },
      getSpeakersOnTalk: {
        speakersOnTalk: {
          speaker
        }
      },
      match: {
        params: {
          id: talkId
        }
      }
    } = this.props;

    return <div>
      <div className="section product-header">
        <div className="container">
          <div className="columns">
            <div className="column">
            <span className="title is-3">
              Talks
            </span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">
            Management
            </span>
              <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
              <span className="title is-4 has-text-muted">
            Add or Remove speaker on Talk
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4 ">
              <nav className="panel">
                <p className="panel-heading">
                  Speaker List
                </p>
                {
                  speakers.map(speaker =>
                    <SpeakerItem
                      key={speaker.id}
                      attending={false}
                      speaker={speaker}
                      onClick={(speakerId) =>
                        this.addSpeaker(talkId, speakerId)
                      }
                    />
                  )
                }
              </nav>
            </div>
            <div className="column is-4 is-offset-2">
              <nav className="panel">
                <p className="panel-heading">
                  Talk Speaker
                </p>
                {
                  speaker ?
                      <SpeakerItem
                        key={speaker.id}
                        attending={true}
                        speaker={speaker}
                        onClick={_ => this.deleteSpeaker(talkId)}
                      />
                     :
                    <a className="panel-block">
                      No speaker yet on this talk
                    </a>
                }
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

//TODO Write the query to get all speakers on a talk (the talk id is passed in the params)
//Use the Speaker fragment
const getSpeakersOnTalk = undefined;

//TODO write the query to get all speakers
// Again, use the Speaker fragment
const getSpeakersQuery = undefined;

//Write the mutation to update a speaker.
const updateSpeaker = undefined;

//Named?
const getSpeakersConfig = {};

//Named?
//To get the speakers on a talk, you need the talk id,
// which are in the path params: match.params.id
const getSpeakersOnTalkConfig = {
};

//Named?
const updateSpeakerConfig = {
};

//Use compose util to connect everything together
const AddSpeakerToTalkData = () => AddSpeakerToTalk;

export default AddSpeakerToTalkData;