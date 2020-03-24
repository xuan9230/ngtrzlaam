const fakeDB = require("../../fakeDB");

const Query = {
  Users: () => Object.values(fakeDB.users),
  User: (_, { id }) => fakeDB.users[id]
};

const Mutation = {};

const User = {
  Cats: user => {
    return Object.values(fakeDB.cats).filter(msg => msg.ownerId === user.id);
  }
};

module.exports = {
  Query,
  Mutation,
  User
};
