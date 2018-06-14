## Music Festival App

This is a broken festival music app, good luck to make it work!

#### Launching the app

```
yarn
yarn start:server
yarn start
```


##### Documentation
We will use Apollo, to help us write our backend and front end.
You will need that documentation:
Backend: https://www.apollographql.com/docs/apollo-server/
Front-end: https://www.apollographql.com/client


####  Getting the Stages

##### Backend
Create the typeDefinitions and resolvers in `schema/index.js`.
ONLY add the minimum required to add a `stages` Query. (Write everything in the `schema/index.js`)
See if it's working well by going to `localhost:3010/graphiql` 
(or setup your IDE to execute GraphQL queries and have auto-completion from your schema within your IDE)

##### React Native
Make your first GraphQL query to get all `stages`
To make that work, you will need to:
- Create an Apollo Client: `apollo/apolloClient.js`
- In `App.js` Add an ApolloProvider Component passing him the created client.
- In `stage/Stages.js` convert the REST calls to a GraphQL call

#### Get All Artists
Add the same as above but to get all artists

#### Add a Query field to get a single artist back.
Your React Native client doesn't need it yet, but it's interesting to implement it to understand how you pass and access query params.

#### Get artists on a Stage
Highly recommended to implement the above TODO, to start this one.
Your resolver functions, can access their parents to associate Types together.

You need to write a query as follows:

`query getArtistsOnStage {
  stage {
    artists {
      ...$FIELDS
    }
  }
}`

You don't have a query parameter from your client now to know which artists to resolve.
But you have access to your parent. By knowing the Stage, you will be able to resolve corresponding artists.
 
 
#### Flexibility of our backend
To optimize flexibility of our server, we'll use the context.
Staticly importing our Models makes our functions impure. That will lead to bad testability.
Instead, we will pass our models in the context when we create our schema and are then able to access it in all resolvers.
We will be able to mock our Models now and to change the way they connect to our Database our REST endpoints. 
(Apollo calls this connectors, not needed in this project)
 
#### Modularizing the schema
One file to define the schema and to resolve the fields?
That won't scale well! Documentation: https://www.apollographql.com/docs/graphql-tools/generate-schema.html#modularizing
