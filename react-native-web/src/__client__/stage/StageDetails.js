import React, {Component} from 'react';
import {SectionList, View, Text, FlatList} from 'react-native'
import PropTypes from 'prop-types';
// import axios from 'axios';
import moment from 'moment';

// import {serverUrl} from '../config/server';
import ArtistRow from '../artists/ArtistRow';

import {graphql} from 'react-apollo';
import GET_DETAILS_QUERY from './getDetails.graphql';

class StageDetails extends Component {
  /*
  // This is how the component looked like when using REST (just so you can see the difference)
  constructor(props) {
    super(props);

    this.state = {
      stageId: props.match.params.id,
      stageDetails: [],
      stage: null
    };
  }

  async componentDidMount() {
    const {data: stage} = await axios.get(`${serverUrl}/stages/${this.state.stageId}`);
    const {data: schedule} = await axios.get(`${serverUrl}/schedules/${stage.scheduleId}`);
    const {data: artists} = await axios.get(`${serverUrl}/artists/`);
    const stageDetails = schedule.program.map(program => ({
      key: `${program.id}`,
      ...program,
      artist: artists.find(artist => artist.id === program.artistId)
    }));
    this.setState({stageDetails, stage});
  }*/

  renderItem = ({item: {artist, start, end}}) => (
    <ArtistRow artist={artist}>
      <Text style={{color: 'grey'}}>
        {`${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`}
        </Text>
    </ArtistRow>
  )

  renderSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: "grey",
        marginLeft: 80
      }}
    />
  );

  renderHeader = () => (
      this.props.data.stage
        ? null
        : <View style={{ height: 30, backgroundColor: "#5E5EB4", justifyContent: "center", alignItems: 'center' }}/>
  );

  render() {
    const stage = null;

    return <View>
        {stage && (
            <FlatList
              data={stage.shows}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
            />
        )}
    </View>
  }
}

StageDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default StageDetails;
