const fakeDB = require("../../fakeDB");

const Query = {
  Cats: (_, { ownerId }) =>
    Object.values(fakeDB.cats).filter(cat => cat.ownerId === ownerId),
  Cat: (_, { id }) => fakeDB.cats[id]
};

const Mutation = {
  createCat: (_, { ownerId, name }) => {
    const length = Object.keys(fakeDB.cats).length;
    const id = `c_${length + 1}}`;

    const newCat = {
      ownerId,
      name,
      knowledge: 50,
      health: 50,
      cuteness: 50,
      birthday: new Date(),
      id
    };

    fakeDB.cats[id] = newCat;
    return newCat;
  },
  updateCat: (_, { id, updates: { name, knowledge, health, cuteness } }) => {
    const cat = fakeDB.cats[id];
    if (!cat) return; // TODO - error handling

    if (name) cat.name = name;
    if (knowledge) cat.knowledge = knowledge;
    if (health) cat.health = health;
    if (cuteness) cat.cuteness = cuteness;

    return cat;
  }
};

const Cat = {
  Owner: (cat, _, context) => {
    return context.dataloaders.userById.load(cat.ownerId);
  }
  // Other fields will fallback to field names
};

module.exports = {
  Query,
  Mutation,
  Cat
};
