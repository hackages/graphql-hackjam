import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ArtistRow = ({
  artist,
  children,
}) => (
  <View style={styles.row}>
    <Image style={styles.picture} source={{ uri: artist.artistImageUrl }} />
    <View>
      <Text style={styles.primaryText}>
        {artist.name}
      </Text>
      {children}
    </View>
  </View>
);

ArtistRow.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistRow;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  picture: {
    width: 50, height: 50, borderRadius: 25, marginRight: 18,
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },
});
