const messages = [
  {
    id: `message-0`,
    body: `First message`,
    time: "some time"
  },
  {
    id: `message-1`,
    body: `Second message`,
    time: "anoter time"
  }
];
let idCount = messages.length;

export default {
  Query: {
    info: () => "dummy info",
    message: (parent, args) => messages.find(m => m.id === args.id),
    messages: () => messages
  },
  Message: {
    // Trivia resolvers are omitted
    time: parent => `2020-${parent.time}`
  },
  Mutation: {
    createMessage: (parent, args) => {
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
