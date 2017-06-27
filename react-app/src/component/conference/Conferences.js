import React  from 'react';
import './Conferences.css';
import ConferenceOverview from './ConferenceOverview';
import {gql} from 'react-apollo';
import {waitForGraphql} from '../../apollo'; import {divideInRows} from '../../utils/index';

const Conferences = ({data: {
  conferences
}}) => {
    return (
      <div className="container section">

        <div className="columns section">
          <div className="column is-8">
            <div className="title">Conferences</div>
          </div>
        </div>

          {
            divideInRows(conferences, conference =>
              <div className="column is-4" key={conference.id}>
                <ConferenceOverview conference={conference}/>
              </div>
            )
          }
      </div>
    );
};

//Write a query to get all conferences
//Use the ConferenceOverview fragment
//${ConferenceOverview.fragments.conference}


const query = undefined; /*gql``;*/

//TODO link with waitForGraphql
// What waitForGraphql util does is just waiting for your query
// to be executed before rendering your component. It is using graphql connector from react-apollo
// This enables you to handle errors and loading status globally.
// You can still handle that per component by using graphql from react-apollo
const ConferencesData = () => Conferences({ data : { conferences: [] }});

export default ConferencesData;
