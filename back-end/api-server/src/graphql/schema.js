const { makeExecutableSchema } = require("graphql-tools");

const resolvers = require("./resolvers");

const fs = require("fs");
const path = require("path");

const typeDefs = fs.readFileSync(
  path.join(__dirname, "../../../../schema.graphql"),
  "utf8"
);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
  // logger: { log: e => console.log(e) }
});

module.exports = schema;
