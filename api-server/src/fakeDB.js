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
      age: 5,
      ownerId: "u_1",
      imgUrl: "",
    },
    c_2: {
      id: "c_2",
      name: "Xiao Gua",
      knowledge: 50,
      health: 50,
      cuteness: 50,
      age: 0,
      ownerId: "u_2",
      imgUrl: "",
    },
    c_3: {
      id: "c_3",
      name: "DD",
      knowledge: 50,
      health: 50,
      cuteness: 50,
      age: 3,
      ownerId: "u_2",
      imgUrl: "",
    },
  },
  users: {
    u_1: {
      id: "u_1",
      name: "Connie",
    },
    u_2: {
      id: "u_2",
      name: "Stan",
    },
  },
  events: {
    e_1: {
      id: "e_1",
      imgUrl:
        "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/1.jpeg",
      status: "inHouse",
      content: "听闻家中两脚兽的房间传来奇怪的喘息，是否前去观察？",
      result: "本宝宝看到了什么？幼小的心灵受到了震撼",
      yesEffects: [
        {
          key: "knowledge",
          delta: 5,
        },
        {
          key: "cuteness",
          delta: -5,
        },
      ],
      noEffects: [],
    },
  },
  eventHistories: {
    eh_1: {
      id: "eh_1",
      date: new Date("2020-04-03"),
      catId: "c_1",
      eventId: "e_1",
    },
  },
};

module.exports = fakeDB;