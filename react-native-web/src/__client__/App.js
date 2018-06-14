import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Stages from './stage/Stages';
import StageDetails from './stage/StageDetails';
import Navigation from './navigation/Navigation';
import Artists from './artists/Artists';
import client from './apollo/apolloClient';

import { ApolloProvider } from 'react-apollo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000088" />
        <Header />
        <Router>
          <View style={{ flex: 1 }}>
            <View style={styles.viewContainer}>
              <Route exact path="/" component={Stages} />
              <Route path="/stage/:id" component={StageDetails} />
              <Route path="/artists" component={Artists} />
            </View>
            <Navigation style={styles.navigation} />
          </View>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
  },
});
