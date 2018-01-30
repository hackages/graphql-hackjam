import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {graphql} from 'react-apollo';
// import axios from 'axios';

// import {serverUrl} from '../config/server';
import ArtistRow from './ArtistRow';
import GET_ARTISTS_QUERY from './getArtists.graphql';

class Artists extends Component {
  renderItem = ({item}) => {
    return <ArtistRow artist={item}/>
  };

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
  );

  renderHeader = () => (
      this.props.data.artists
          ? null
          : <View style={{ height: 30, backgroundColor: "#5E5EB4", justifyContent: "center", alignItems: 'center' }} >
              <Text style={{color: 'white'}}> All Artists</Text>
            </View>
  );

  render() {
    const artists = [];
    return <ScrollView>
      {artists && <FlatList
        data={artists}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={item => item.id}
      />}
    </ScrollView>
  }
}

export default Artists;
