const Query = {
  users: (_, args, { db }) => Object.values(db.users),
  user: (_, { id }, { db }) => db.users[id]
};

const Mutation = {};

const User = {
  cats: (user, args, { db }) => {
    return Object.values(db.cats).filter(msg => msg.ownerId === user.id);
  }
};

module.exports = {
  Query,
  Mutation,
  User
};
