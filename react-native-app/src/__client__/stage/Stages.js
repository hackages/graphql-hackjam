import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import StageOverviewCard from './StageOverviewCard';
import {graphql} from 'react-apollo';
import GET_STAGE_QUERY from './getStages.graphql';

//TODO

// Enhance this component with a `graphql` HOC.
// If you pass the HOC a GraphQL query, like so: graphql(SOME_QUERY)
// It will give you back a function that you can call to give your Component.
// The HOC will pass the result of your GraphQL query as props to the Component you give him.
// The props will have this data structure by default: { data: $THE_QUERY_FIELD_YOU_ASKED, loading: $BOOL }
// Usage => graphql(SOME_QUERY)(Component);

// Hint: the query is already written in getStage.graphql

const Stages  = () => (
  <ScrollView>
    {[].map(stage => <StageOverviewCard stage={stage} key={stage.id}/>)}
  </ScrollView>
);

// You know you can console.log without having to add curly brackets?
// const Comp = () => (console.log('something'), <View/>);
// Cool huh?

export default Stages;