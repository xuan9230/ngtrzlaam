/**
 * Fake database
 */
const fakeDB = {
  messages: {
    m_1: {
      id: "m_1",
      body: "ee",
      author_id: "a_1"
    },
    m_2: {
      id: "m_2",
      body: "asd",
      author_id: "a_2"
    }
  },
  authors: {
    a_1: {
      id: "a_1",
      name: "Ace"
    },
    a_2: {
      id: "a_2",
      name: "Bob"
    }
  }
};

module.exports = fakeDB;
