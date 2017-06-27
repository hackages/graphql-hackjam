import React from 'react';
import {waitForGraphql} from '../../apollo/index';
import {gql} from 'react-apollo'; import SpeakerOverview from './SpeakerOverview'; import TalkOverview from '../talk/TalkOverview'; import {divideInRows} from '../../utils/index';

const SpeakerDetails = ({data: {
  speaker: {
    picture,
    username,
    bio,
    publicName,
    talks
  }
}}) => <div>
  <div className="section product-header">
    <div className="container">
      <div className="columns">
        <div className="column">
          <span className="title is-3">
            {username}
          </span>
          <span className="title is-3 has-text-muted">
            {` @${publicName}`}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <p className="title is-3 has-text-muted">
            {bio}
          </p>
          <hr/>
            <p className="title is-4">
              Talks :
            </p>
              {
                divideInRows(talks, talk =>
                  talk && <div className="column is-6" key={talk.id}>
                    <TalkOverview
                      talk={talk}
                    />
                  </div>
                ,2)
              }
        </div>
      </div>
    </div>
  </div>
</div>;


const query = undefined; /*gql`
  query getSpeakerById($id: ID!) {
      speaker: User(id: $id) {
          ...Speaker
          talks {
              ...TalkOverview
          }
      }
  }
  
  ${SpeakerOverview.fragments.speaker}
  ${TalkOverview.fragments.talk}
`;*/

const config = {
  options: ({match: {params: {id}}}) => ({
    variables: {
      id
    }
  })
};

//const SpeakerDetailsData = waitForGraphql(query, config)(SpeakerDetails);

export default SpeakerDetails;