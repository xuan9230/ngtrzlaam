const DataLoader = require("dataloader");

const fakeDB = require("../fakeDB");

// Mimic real resolvers of 100ms lag
const getAuthorsById = async ids => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return ids.map(author_id => fakeDB.authors[author_id]);
};

const dataloaders = () => ({
  authorById: new DataLoader(getAuthorsById)
});

module.exports = dataloaders;
