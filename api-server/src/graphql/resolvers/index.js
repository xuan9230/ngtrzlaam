const { Query: CatQuery, Mutation: CatMutation, Cat } = require("./Cat");
const { Query: UserQuery, Mutation: UserMutation, User } = require("./User");
const {
  Query: EventQuery,
  Mutation: EventMutation,
  Event,
} = require("./Event");

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
  Cat,
  Event,
  User,
};

module.exports = resolvers;
