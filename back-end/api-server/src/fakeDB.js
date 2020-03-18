/**
 * Fake database
 */
const fakeDB = {
  messages: {
    m_1: {
      id: "m_1",
      body: "ee",
      date: new Date("2020-03-03"),
      author_id: "a_1"
    },
    m_2: {
      id: "m_2",
      body: "asd",
      date: new Date("2020-03-04"),
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
