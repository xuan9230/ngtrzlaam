const messages = [];
let idCount = messages.length;

export default {
  Query: {
    info: () => "dummy info",
    feed: () => messages
  },
  Mutation: {
    post: (parent, args) => {
      const { body, time } = args;

      const message = {
        id: `message-${idCount++}`,
        body,
        time
      };
      messages.push(message);
      return message;
    }
  }
};
