const Query = {
  events: (_, { catId }, { db }) => {
    // Get cat
    const cat = db.cats[catId];
    if (!cat) throw new Error("Cannot find cat");

    // Only return events that:
    // 1. the cat hasn't encountered
    // 2. matches the cat's current status
    const { status, eventIds } = cat;

    return Object.values(db.events).filter((event) => {
      return event.status === status && !eventIds[event.id];
    });
  },
};

const Mutation = {};

const Event = {};

module.exports = {
  Query,
  Mutation,
  Event,
};
