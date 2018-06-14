import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {graphql} from 'react-apollo';

import ArtistRow from './ArtistRow';
import gql from 'graphql-tag';

const GET_ARTISTS = gql`
{
  goodLuck
}
`;


class Artists extends Component {
  renderItem = ({item: artist}) => {
    return <ArtistRow artist={artist}/>
  };

  renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
  );

  renderHeader = () => (
      null
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
