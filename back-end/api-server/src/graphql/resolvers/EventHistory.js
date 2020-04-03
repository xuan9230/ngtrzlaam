const Query = {
  eventHistories: (parent, { catId }, { db }) => {
    const catExists = !!db.cats[catId];
    if (!catExists) throw new Error("Cat doesn't exist");
    return Object.values(db.eventHistories).filter(eh => eh.catId === catId);
  },
  eventHistory: (parent, { id }, { db }) => db.eventHistories[id]
};

const Mutation = {
  createEventHistory: (parent, { catId, content }, { db }) => {
    const catExists = !!db.cats[catId];
    if (!catExists) throw new Error("Cat doesn't exist");

    const id = `e_2`;

    const newEventHistory = {
      id,
      catId,
      content,
      date: new Date()
    };

    db.eventHistories[id] = newEventHistory;
    return newEventHistory;
  }
};

const EventHistory = {
  cat: (eventHistory, args, { db }) => {
    return db.cats[eventHistory.catId];
  }
};

module.exports = {
  Query,
  Mutation,
  EventHistory
};
