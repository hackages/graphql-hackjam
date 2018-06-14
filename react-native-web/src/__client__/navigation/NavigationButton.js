import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

const routeMap = {
  artists: ['artists'],
  stages: ['stage'],
};

const NavigationButton = ({
  icon, to, currentPathname, label,
}) => {
  const route = to.substring(1) || 'stages';
  // THIS IS WORKING ;)
  const activePath = routeMap[route].some((path) => {
    if (currentPathname === '/') { return route === 'stages'; }

    return currentPathname.includes(path);
  });
  return (<View style={styles.container}>
    <Link to={to}>
      <Text style={[styles.navigationText, { color: activePath ? '#00ef00' : '#fff' }]}>
        {label}
      </Text>
    </Link>
  </View>);
};

export default NavigationButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  navigationText: {
    fontSize: 12,
  },
});
