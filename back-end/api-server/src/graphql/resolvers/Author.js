const fakeDB = require("../../fakeDB");

const Query = {
  Authors: () => Object.values(fakeDB.authors),
  Author: (_, { id }) => fakeDB.authors[id]
};

const Mutation = {};

const Author = {
  Messages: author => {
    return Object.values(fakeDB.messages).filter(
      msg => msg.author_id === author.id
    );
  }
};

module.exports = {
  Query,
  Mutation,
  Author
};
