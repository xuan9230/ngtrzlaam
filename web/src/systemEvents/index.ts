import { Event, CatStatus, CatAttribute } from "../generated/graphql";

const systemEvents: Event[] = [
  {
    id: "e_1",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/1.jpeg",
    status: CatStatus.InHouse,
    content: "听闻家中两脚兽的房间传来奇怪的喘息，是否前去观察？",
    result: "本宝宝看到了什么？幼小的心灵受到了震撼",
    yesEffects: [
      {
        key: CatAttribute.Knowledge,
        delta: 5,
      },
      {
        key: CatAttribute.Wilderness,
        delta: -5,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_2",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/2.png",
    status: CatStatus.InHouse,
    content: "在餐桌上发现了火腿。吃？",
    result: "",
    yesEffects: [
      {
        key: CatAttribute.Health,
        delta: 8,
      },
      {
        key: CatAttribute.Wilderness,
        delta: 8,
      },
    ],
    noEffects: [],
  },
];

export default systemEvents;
