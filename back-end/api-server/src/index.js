const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const schema = require("./graphql/schema");
const dataloaders = require("./graphql/dataloaders");

const app = express();
app.use(cors());
app.use(
  "/graphql",
  // pass a function because we want one DataLoader instance per request
  graphqlHTTP(req => ({
    schema,
    graphiql: true,
    context: { dataloaders: dataloaders() }
  }))
);

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
