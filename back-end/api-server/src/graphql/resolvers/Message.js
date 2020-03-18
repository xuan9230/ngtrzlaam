const fakeDB = require("../../fakeDB");

const Query = {
  Messages: () => Object.values(fakeDB.messages),
  Message: (_, { id }) => fakeDB.messages[id]
};

const Mutation = {
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
};

const Message = {
  Author: (message, _, context) => {
    return context.dataloaders.authorById.load(message.author_id);
  }
};

module.exports = {
  Query,
  Mutation,
  Message
};
