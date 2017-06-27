import React, {Component} from 'react';

import ConferenceRow from './ConferenceRow';
import {gql, compose, graphql} from 'react-apollo';
import ConferenceOverview from '../../conference/ConferenceOverview';
import {waitForGraphql} from '../../../apollo/index';
import Navigation from '../../table/navigation';
import Header from '../Header';
import Table from '../../table/Table';


class Conferences extends Component {
  render() {
    const {
      getConferences,
      deleteConference,
      amountPerPage,
      pageNumber,
      navigateToPage,
      deleteItem
    } = this.props;

    const labels = ['ID', 'Name', 'City', 'Country', 'Start Date'];
    const {
      conferences,
      _allConferencesMeta: {
        count: total
      }
    } = getConferences;
    return <div>
      <Header
        title="Conferences"
        addLink="/secure/conference"
      />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Table
                labels={labels}
              >
                {
                  conferences.map(conference =>
                    <ConferenceRow
                      key={conference.id}
                      conference={conference}
                      deleteConference={(conferenceId) =>
                        deleteItem(conferenceId, deleteConference, getConferences)}
                    />
                  )
                }
              </Table>
              <Navigation
                total={total}
                amountPerPage={amountPerPage}
                pageNumber={pageNumber}
                page={(pageNumber) => navigateToPage(pageNumber, getConferences)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

//TODO write query to get all conferences
//Hint: use the skip and first variables, graph.cool works with
//Use fragments when possible
const getConferences = undefined;

//TODO delete the conference mutation
const deleteConference = undefined;



//TODO pass first and skip variables to the getConferences query
//amountPerPage is passed as prop and should be assigned to first
//Since you will come back from the add page, you need to rely on network.
//Checkout fetchPolicy of apollo
const getConferencesConfig = {};

//He need a name
const deleteConferenceConfig = {};

//TODO use the compose util to bind the query and the mutation on the component
const deleteThisWhenImplementingRealStuff = {
  getConferences: {
    conferences: [],
    _allConferencesMeta: {
      count: 1
    }
  },
  amountPerPage: 1,
  pageNumber: 1,
  navigateToPage: 1,
  deleteItem: () => null
};
const ConferencesData = () => <Conferences {...deleteThisWhenImplementingRealStuff}/>;

export default ConferencesData;