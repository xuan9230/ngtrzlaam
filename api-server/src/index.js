const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const db = require("./fakeDB");
const schema = require("./graphql/schema");
const dataloaders = require("./graphql/dataloaders");

const PORT = 6060;

const app = express();
app.use(cors());
app.use(
  "/graphql",
  // pass a function because we want one DataLoader instance per request
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: { dataloaders: dataloaders(), db },
  }))
);

app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
