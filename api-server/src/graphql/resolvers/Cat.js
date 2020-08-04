const Query = {
  cats: (_, { ownerId }, { db }) =>
    Object.values(db.cats).filter((cat) => cat.ownerId === ownerId),
  cat: (_, { id }, { db }) => db.cats[id],
};

const Mutation = {
  createCat: (_, { ownerId, name }, { db }) => {
    const ownerExists = !!db.users[ownerId];
    if (!ownerExists) throw new Error("Owner doesn't exist");

    // TODO: name must be unique within a user's cats
    // TODO: get a random img url
    const length = Object.keys(db.cats).length;
    const id = `c_${length + 1}`;

    const newCat = {
      ownerId,
      name,
      knowledge: 50,
      health: 50,
      wilderness: 50,
      age: 0,
      status: "inHouse",
      imgUrl: "",
      id,
    };

    db.cats[id] = newCat;
    return newCat;
  },
  updateCat: (
    _,
    { id, input: { name, knowledge, health, wilderness, age, status } },
    { db }
  ) => {
    const cat = db.cats[id];
    if (!cat) throw new Error("Cat doesn't exist");

    if (name) cat.name = name;
    if (knowledge) cat.knowledge = knowledge;
    if (health) cat.health = health;
    if (wilderness) cat.wilderness = wilderness;
    if (age) cat.age = age;
    if (status) cat.status = status;

    return cat;
  },
  deleteCat: (_, { id }, { db }) => {
    const catToDelete = db.cat[id];
    if (!catToDelete) throw new Error("Cat doesn't exist");

    delete db.cat[id];
    return catToDelete;
  },
};

const Cat = {
  owner: (cat, _, context) => {
    return context.dataloaders.userById.load(cat.ownerId);
  },
  eventIds: (cat) => {
    return Object.keys(cat.eventIds);
  },
  // Other fields will fallback to field names
};

module.exports = {
  Query,
  Mutation,
  Cat,
};
