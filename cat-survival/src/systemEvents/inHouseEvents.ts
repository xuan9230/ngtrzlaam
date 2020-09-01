import { Event } from "../baseTypes";
import { CatStatus, CatAttribute } from "../API";

const inHouseEvents: Omit<Event, "createdAt" | "updatedAt">[] = [
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
  {
    id: "e_3",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_3.jpg",
    status: CatStatus.inHouse,
    content: "睡觉时惨遭铲屎官蹂躏。咬？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 5,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 10,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_4",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_4.jpg",
    status: CatStatus.inHouse,
    content: "网恋中的阿强想和你视频。营业？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 3,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 8,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_5",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_5.jpg",
    status: CatStatus.inHouse,
    content: "家里的两脚兽说，鱼吃的太多了，也得吃点水果。同意？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 5,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_6",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_6.jpg",
    status: CatStatus.inHouse,
    content: "为了捕鸟，我要练习飞翔。",
    result: "惨遭失败",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: -7,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_7",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_7.jpg",
    status: CatStatus.inHouse,
    content: "全家最好的晒太阳点竟是铲屎的的窝。占了？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 3,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 6,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_8",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_8.jpg",
    status: CatStatus.inHouse,
    content: "偶尔在铲屎的怀里睡个觉也不错吧？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: -15,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_9",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_9.jpg",
    status: CatStatus.inHouse,
    content: "作为一只高雅的猫子，艺术也不能放下",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 9,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_10",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_10.JPG",
    status: CatStatus.inHouse,
    content: "铲屎的又傻了，把自己关在水缸里还要痛苦的叫。去救？",
    result: "自己也落进浴缸，成了落汤猫",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -7,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 6,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_11",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_11.jpg",
    status: CatStatus.inHouse,
    content: "被撸的有点舒服……猫……",
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
        delta: -15,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_12",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_12.jpg",
    status: CatStatus.inHouse,
    content: "家里来了个美艳小弟，也许可以把它收编进后宫。",
    result: "惨遭小弟暴打",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 9,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_13",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_13.jpg",
    status: CatStatus.inHouse,
    content: "铲屎的胆敢抢我的王座时，必须给他一点厉害康康",
    result: "惨遭铲屎官高速旋转",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -5,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: -10,
      },
    ],
    noEffects: [],
  },
  {
    id: "e_14",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/e_14.jpg",
    status: CatStatus.inHouse,
    content: "学习如何与铲屎的工作时和谐共处",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 13,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: -7,
      },
    ],
    noEffects: [],
  },
];

export default inHouseEvents;
