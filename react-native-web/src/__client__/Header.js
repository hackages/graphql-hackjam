import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title}> Music Festival App </Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 10,
    backgroundColor: '#000099',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
