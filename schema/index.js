const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
const express = require('express');

const app = express();

//This express route will read the introspection queries on your graphql schema
// This on is hosted @graph.cool
app.use('/graphiql', graphiqlExpress({
  endpointURL: 'https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i',
  query: `
    # The main raison we want you to launch this is to look at the docs 
    # (Click on the button in the right corner)
    
    # This is one of the great advantages of graphQL:
    # Your schema has introspection queries as well as metadata.
    # You will always have a great documentation about your api!
    
    # You can also execute queries and mutations here to try them out
    
    query myVeryFirsttQuery {
      allConferences {
        name
      }
    }
  `
}));

app.listen(5000, function () {
  console.log('Schema available at: http://localhost:5000/graphiql');
});