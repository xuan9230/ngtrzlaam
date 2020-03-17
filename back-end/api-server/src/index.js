const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const schemaDef = fs.readFileSync(
  path.join(__dirname, "../../../schema.graphql")
);
const schema = buildSchema(`${schemaDef}`);

const dummyMessages = [
  { body: "ee", id: "1", author: "Q" },
  { body: "asd", id: "2", author: "W" }
];

const rootValue = {
  info: () => "hello banana",
  messages: (args, req) => dummyMessages,
  message: ({ id }) => dummyMessages.find(m => m.id === id),
  createMessage: ({ input }) => {
    const newMessage = {
      author: input.author,
      body: input.body,
      id: `${dummyMessages.length + 1}`
    };
    dummyMessages.push(newMessage);
    return newMessage;
  }
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
