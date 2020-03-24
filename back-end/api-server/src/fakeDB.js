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
  }
};

module.exports = fakeDB;
