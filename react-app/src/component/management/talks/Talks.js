import React, {Component} from 'react';

import {gql, compose, graphql} from 'react-apollo';
import {waitForGraphql} from '../../../apollo/index';
import Navigation from '../../table/navigation';
import Header from '../Header';
import Table from '../../table/Table';
import TalkOverview from '../../talk/TalkOverview';
import TalkRow from './TalkRow';


class Talks extends Component {
  render() {
    const {
      amountPerPage,
      pageNumber,
      navigateToPage,
      deleteItem,
      getTalks,
      deleteTalk
    } = this.props;

    const labels = ['ID', 'title', 'Room', 'Starts At'];

    const {
      talks,
      _allTalksMeta: {
        count: total
      }
    } = getTalks;

    return <div>
      <Header
        title="Talks"
        addLink="/secure/talk"
      />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Table
                labels={labels}
              >
                {
                  talks.map(talk =>
                    <TalkRow
                      key={talk.id}
                      talk={talk}
                      deleteTalk={(talkId) =>
                        deleteItem(talkId, deleteTalk, getTalks)}
                    />
                  )
                }
              </Table>
              <Navigation
                total={total}
                amountPerPage={amountPerPage}
                pageNumber={pageNumber}
                page={(pageNumber) => navigateToPage(pageNumber, getTalks)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

const getTalks =  undefined; /*gql`
    query getTalks($first: Int!, $skip: Int!){
        talks: allTalks(
            first: $first,
            skip: $skip
        ) {
            ...TalkOverview
        }

        _allTalksMeta {
            count
        }
    }
    
    ${TalkOverview.fragments.talk}
`;*/

//TODO delete a talk mutation
const deleteTalk = undefined;

//TODO pass first and skip variables to the getConferences query
//amountPerPage is passed as prop and should be assigned to first
//Since you will come back from the add page, you need to rely on network only.
const getTalksConfig = {
};

const deleteTalkConfig = { name: 'deleteTalk' };

//TODO use compose to connect all queries and mutations on the component
const deleteWhenImplementing = {
  amountPerPage: Infinity,
  pageNumber: 1,
  navigateToPage: () => null,
  deleteItem: () => null,
  getTalks: {
    talks : [],
    _allTalksMeta: {
      count: 1
    }
  },
  deleteTalk : () => null
};
const TalksData = () => <Talks {...deleteWhenImplementing}/>;

export default TalksData;