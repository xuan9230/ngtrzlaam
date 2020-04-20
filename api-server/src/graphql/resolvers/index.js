const { Query: CatQuery, Mutation: CatMutation, Cat } = require("./Cat");
const { Query: UserQuery, Mutation: UserMutation, User } = require("./User");
const {
  Query: EventQuery,
  Mutation: EventMutation,
  Event,
} = require("./Event");
const {
  Query: EventHistoryQuery,
  Mutation: EventHistoryMutation,
  EventHistory,
} = require("./EventHistory");

const { Date } = require("./Date");

const resolvers = {
  Query: {
    ...CatQuery,
    ...EventQuery,
    ...EventHistoryQuery,
    ...UserQuery,
  },
  Mutation: {
    ...CatMutation,
    ...EventMutation,
    ...EventHistoryMutation,
    ...UserMutation,
  },
  Date,
  Cat,
  Event,
  EventHistory,
  User,
};

module.exports = resolvers;
