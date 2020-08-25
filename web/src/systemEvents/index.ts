import { Event, CatStatus } from "../baseTypes";
import { CatAttribute } from "../API";

const systemEvents: Omit<Event, "createdAt" | "updatedAt">[] = [
  {
    id: "e_1",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/1.jpeg",
    status: CatStatus.inHouse,
    content: "听闻家中两脚兽的房间传来奇怪的喘息，是否前去观察？",
    result: "本宝宝看到了什么？幼小的心灵受到了震撼",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 5,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: -5,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_2",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/2.png",
    status: CatStatus.inHouse,
    content: "在餐桌上发现了火腿。吃？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 8,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 8,
      },
    ],
    noEffects: [],
  },
];

export default systemEvents;
