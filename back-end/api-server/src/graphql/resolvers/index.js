const { Query: CatQuery, Mutation: CatMutation, Cat } = require("./Cat");
const { Query: UserQuery, Mutation: UserMutation, User } = require("./User");
const {
  Query: EventHistoryQuery,
  Mutation: EventHistoryMutation,
  EventHistory
} = require("./EventHistory");
const { Date } = require("./Date");

const resolvers = {
  Query: {
    ...CatQuery,
    ...EventHistoryQuery,
    ...UserQuery
  },
  Mutation: {
    ...CatMutation,
    ...EventHistoryMutation,
    ...UserMutation
  },
  Date,
  Cat,
  EventHistory,
  User
};

module.exports = resolvers;
