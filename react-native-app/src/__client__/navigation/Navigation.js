import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationButton from './NavigationButton';
import { Ionicons } from '@expo/vector-icons';
import {withRouter} from 'react-router-native';

const Navigation = ({style, location: {pathname}}) => (
  <View style={[styles.container, style]}>
    <NavigationButton icon="ios-flag" to="/" label="Stages" currentPathname={pathname}/>
    <NavigationButton icon="ios-mic" to="/artists" label="Artists" currentPathname={pathname}/>
  </View>
);

export default withRouter(Navigation);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000099'
  },
});