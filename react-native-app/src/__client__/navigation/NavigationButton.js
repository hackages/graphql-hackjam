import React from 'react';
import {Link} from 'react-router-native';
import {StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const routeMap = {
  artists: ['artists'],
  stages: ['stage']
};

const NavigationButton = ({icon, to, currentPathname, label}) => {
  const route = to.substring(1) || 'stages';
  const activePath = routeMap[route].some(path => {
    //Default route
    if(currentPathname === '/')
      return route === 'stages';

    return currentPathname.includes(path)
  });
  return <Link to={to} style={styles.container} >
    <View style={styles.container}>
      <Ionicons name={icon} size={25} color={activePath ? '#00ef00' : '#fff'} />
      <Text style={[styles.navigationText, { color: activePath ? '#00ef00' : '#fff'}]}>
        {label}
      </Text>
    </View>
  </Link>;
}

export default NavigationButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10
  },
  navigationText: {
    fontSize: 12,
  }
})