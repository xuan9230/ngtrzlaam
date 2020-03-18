const fakeDB = require("../fakeDB");

const resolvers = {
  Query: {
    Messages: () => Object.values(fakeDB.messages),
    Message: (_, { id }) => fakeDB.messages[id],
    Authors: () => Object.values(fakeDB.authors),
    Author: (_, { id }) => fakeDB.authors[id]
  },
  Mutation: {
    createMessage: (_, { author_id, body }) => {
      const length = Object.keys(fakeDB.messages).length;
      const id = `m_${length + 1}}`;

      const newMessage = {
        author_id,
        body,
        id
      };

      fakeDB.messages[id] = newMessage;
      return newMessage;
    }
  },
  Message: {
    Author: message => fakeDB.authors[message.author_id]
  },
  Author: {
    Messages: author => {
      return Object.values(fakeDB.messages).filter(
        msg => msg.author_id === author.id
      );
    }
  }
};

module.exports = resolvers;
