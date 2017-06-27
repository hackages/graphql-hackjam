
#Before you get started
npm i or yarn 
npm start or yarn start => app will be running on port 3000
To read the schema documentation hosted on graph.cool
go into the /schema directory and run 
npm install && npm start 
or
yarn && yarn start


You first have to create the apolloClient in apollo/index.js
and use it in your application /index.js, by using the ApolloProvider
component


### 1. Basic queries: Get all conferences
 - The main root will display the Conferences component
 - Write a query to fetch all conferences. Use a fragment for that.
 - Iterate on conferences and ConferenceOverView component
 - Understand how data are passed in a component
 - Understand benefits of Fragments: Usage in other component, propTypes check.
 - Understand the HOC from apollo graphql and waitForGraphql

 ### 2. Basic queries: Conference details
 - In ConferenceDetails:
 - Write the config parameter.
 - Understand how you can add variables to your queries/mutations (with props access)
 - Understand how variables are used in the query function and in the query itself
 (the id should be required)
 alias the query, call it conference
 - You should only use fragments in the query on each Type!

 ### 3. Basic mutations : Authentication
 - Fix the Registration and login components
 - Write a basic mutation
 - Understand how variables are passed in mutations
 - Understand how the mutation is available in your component

 ### 4. Advanced queries PART 1
 - Mixin mutations and queries in one component
(Don't take care of the Conference component, YET!)
 - In the management conferences component
 - Write a query to get the list of conferences on a particular page
 - Write a mutation to delete a conference
 - Understand how you pass variables
 - Understand how apollo passes data in component
 - Understand pagination

 - in the management talks component
 - write a query to get all talks in one page
 - write a mutation to delete a talk

 ### 5. Advanced queries PART 2
  - The management/Conference component should add a conference if there's no
  conference id in the path params.
  - If there's an id in the path, it means you need to fetch that conference
  and when submitting, you don't need to add it, but update it.
  - Understand skip property
  - Understand name property
  - Mixin mutations and queries

  - Same for management/Talk component








## Backend

- Want to see how a schema is written in nodeJS?
- Add another apolloClient to your application with the schema you will create.
- This graphQL editor enables you to create your schema and use it in your app :
- https://launchpad.graphql.com/

- The uri of your schema will be visible in the black bottom part, once you save your project.

- The only thing you have to write now, it a chat application in each conference detail.
Good luck




