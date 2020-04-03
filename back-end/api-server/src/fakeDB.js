/**
 * Fake database
 */
const fakeDB = {
  cats: {
    c_1: {
      id: "c_1",
      name: "Furfur",
      knowledge: 50,
      health: 50,
      cuteness: 50,
      birthday: new Date("2016-07-05"),
      ownerId: "u_1"
    },
    c_2: {
      id: "c_2",
      name: "Xiao Gua",
      knowledge: 50,
      health: 50,
      cuteness: 50,
      birthday: new Date("2019-04-19"),
      ownerId: "u_2"
    },
    c_3: {
      id: "c_3",
      name: "DD",
      knowledge: 50,
      health: 50,
      cuteness: 50,
      birthday: new Date("2020-03-20"),
      ownerId: "u_2"
    }
  },
  users: {
    u_1: {
      id: "u_1",
      name: "Connie"
    },
    u_2: {
      id: "u_2",
      name: "Stan"
    }
  },
  eventHistories: {
    e_1: {
      id: "e_1",
      catId: "c_1",
      content: "found a treasure!",
      date: new Date("2020-04-03")
    }
  }
};

module.exports = fakeDB;
