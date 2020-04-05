const DataLoader = require("dataloader");

const fakeDB = require("../fakeDB");

// Mimic real resolvers of 100ms lag
const getUsersById = async ids => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return ids.map(userId => fakeDB.users[userId]);
};

const dataloaders = () => ({
  userById: new DataLoader(getUsersById)
});

module.exports = dataloaders;
