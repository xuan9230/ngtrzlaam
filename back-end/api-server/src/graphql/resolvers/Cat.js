const fakeDB = require("../../fakeDB");

const Query = {
  Cats: () => Object.values(fakeDB.cats),
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
