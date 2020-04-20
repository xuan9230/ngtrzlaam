const Query = {
  events: (_, { status }, { db }) =>
    Object.values(db.events).filter((event) => event.status === status),
};

const Mutation = {};

const Event = {};

module.exports = {
  Query,
  Mutation,
  Event,
};
