import React from 'react';
import {Image, Text, View, StyleSheet, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {Link} from 'react-router-native';
import { LinearGradient } from 'expo';

const Stage = ({stage: { name, imageUrl, id}}) => (
  <Link to={`/stage/${id}`}>
    <View>
      <ImageBackground source={{uri: imageUrl}} style={styles.backgroundImage}>
        <Text style={styles.name}> {name} </Text>
      </ImageBackground>
    </View>
  </Link>
);

Stage.propTypes = {
  stage: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired
};

export default Stage;

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 2
    },
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  }
});