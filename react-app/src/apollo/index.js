import React from 'react';
import {graphql} from 'react-apollo';
import {ApolloClient, createNetworkInterface} from 'react-apollo';
import LoadingComponent from '../component/LoadingComponent';

//TODO create apollo client with this uri:
//'https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i'
export const apolloClient = new ApolloClient();


export const waitForGraphql = (query, config) => (WrappedComponent) => {
  const GraphQLHandler = (props) => {
    //If skip in config, pass if true
    if(config && config.skip && config.skip(props))
      return <WrappedComponent {...props}/>;

    let propertyName = "data"; //default property name used by Apollo
    if(config && config.name && (typeof config.name === 'string'))
      propertyName = config.name; //Can be changed by config object

    if(props[propertyName].loading) {
      return <LoadingComponent />
    } else if(props[propertyName].error) {
      console.log(props[propertyName].error);
      return <div>Error</div>
    }
    return <WrappedComponent {...props}/>
  };
  //Wrapped component will loose it's static properties,
  //Transfer them to the returned graphQLHandler function
  Object.keys(WrappedComponent)
    .map(key =>
      GraphQLHandler[key] = WrappedComponent[key]
    );
  return graphql(query, config)(GraphQLHandler);
};