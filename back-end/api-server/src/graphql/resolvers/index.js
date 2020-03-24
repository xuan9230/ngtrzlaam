const { Query: CatQuery, Mutation: CatMutation, Cat } = require("./Cat");
const { Query: UserQuery, Mutation: UserMutation, User } = require("./User");
const { Date } = require("./Date");

const resolvers = {
  Query: {
    ...CatQuery,
    ...UserQuery
  },
  Mutation: {
    ...CatMutation,
    ...UserMutation
  },
  Date,
  Cat,
  User
};

module.exports = resolvers;
