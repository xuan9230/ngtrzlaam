const { Query: CatQuery, Mutation: CatMutation, Cat } = require("./Cat");
const { Query: UserQuery, Mutation: UserMutation, User } = require("./User");
const {
  Query: EventQuery,
  Mutation: EventMutation,
  Event,
} = require("./Event");

const { Date } = require("./Date");

const resolvers = {
  Query: {
    ...CatQuery,
    ...EventQuery,
    ...UserQuery,
  },
  Mutation: {
    ...CatMutation,
    ...EventMutation,
    ...UserMutation,
  },
  Date,
  Cat,
  Event,
  User,
};

module.exports = resolvers;
