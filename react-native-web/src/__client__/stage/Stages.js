import React from 'react';
import {ScrollView} from 'react-native';
import StageOverviewCard from './StageOverviewCard';
import {graphql} from 'react-apollo';
import GET_STAGE_QUERY from './getStages.graphql';

//TODO

// Add the Query component from react-apollo to get all stages
// The render function props will have this data structure by default: { data: $THE_QUERY_FIELD_YOU_ASKED, loading: $BOOL }


const Stages  = () => (
  <ScrollView>
    {[].map(stage => <StageOverviewCard stage={stage} key={stage.id}/>)}
  </ScrollView>
);

// You know you can console.log without having to add curly brackets?
// const Comp = () => (console.log('something'), <View/>);
// Cool huh?

export default Stages;
