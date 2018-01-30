import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { NativeRouter, Route} from 'react-router-native'

import Header from './src/__client__/Header';
import Stages from './src/__client__/stage/Stages';
import StageDetails from './src/__client__/stage/StageDetails';
import Navigation from './src/__client__/navigation/Navigation';
import Artists from './src/__client__/artists/Artists';
import client from './src/__client__/apollo/apolloClient';
import {ApolloProvider} from 'react-apollo';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#000088"/>
          <Header/>
          <NativeRouter>
            <View style={{flex: 1}}>
              <View style={styles.viewContainer}>
                <Route exact path="/" component={Stages}/>
                <Route path="/stage/:id" component={StageDetails}/>
                <Route path="/artists" component={Artists}/>
              </View>
              <Navigation style={styles.navigation}/>
            </View>
          </NativeRouter>
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
    justifyContent: 'space-between'
  },
  contentContainer: {
    flex: 1
  },
});
