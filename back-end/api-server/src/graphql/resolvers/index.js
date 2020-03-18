const {
  Query: MessageQuery,
  Mutation: MessageMutation,
  Message
} = require("./Message");
const {
  Query: AuthorQuery,
  Mutation: AuthorMutation,
  Author
} = require("./Author");
const { Date } = require("./Date");

const resolvers = {
  Query: {
    ...MessageQuery,
    ...AuthorQuery
  },
  Mutation: {
    ...MessageMutation,
    ...AuthorMutation
  },
  Date,
  Message,
  Author
};

module.exports = resolvers;
