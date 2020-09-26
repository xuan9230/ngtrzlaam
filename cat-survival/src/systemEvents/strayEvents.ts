import { Event } from "../baseTypes";
import { CatStatus, CatAttribute } from "../API";

const strayEvents: Event[] = [
  {
    id: "st_1",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_1.jpg",
    status: CatStatus.stray,
    content: "沐浴着和煦的阳光，呼吸着自由的空气",
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
    noEffects: [
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
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_2",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_2.jpg",
    status: CatStatus.stray,
    content: "前方好像是镇上著名的黑道 - 旺旺组。接近吗？",
    result: "惨遭围剿，好不容易才逃出一条生路",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -9,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 7,
      },
    ],
    noEffects: [],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_3",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_3.jpg",
    status: CatStatus.stray,
    content: "有点饿了，发现路边有家肉店。看来午饭有着落了？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 6,
      },
    ],
    noEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -6,
      },
    ],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_4",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_4.jpg",
    status: CatStatus.stray,
    content: "虽是流落街头的贵族，我也要训练点谋生技能，比如下水道寻宝什么的",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -5,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 10,
      },
    ],
    noEffects: [],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_5",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_5.jpg",
    status: CatStatus.stray,
    content: "为了在这风云变幻的街头生存，要练个轻功傍身吗？",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -5,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 9,
      },
    ],
    noEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: -5,
      },
    ],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_6",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_6.jpg",
    status: CatStatus.stray,
    content: "隔壁街的大黄凶狠的盯着你，但是这里昨天才被你标记成了自己的地盘。",
    result: "",
    yesEffects: [],
    noEffects: [],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: "st_7",
    noEventID: "st_13",
    newStatus: null,
  },
  {
    id: "st_7",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_7.jpg",
    status: CatStatus.stray,
    content: "靠近，与大黄对峙？",
    result: "",
    yesEffects: [],
    noEffects: [],
    yesItemName: null,
    isChildEvent: true,
    yesEventID: "st_8",
    noEventID: "st_13",
    newStatus: null,
  },
  {
    id: "st_8",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_8.jpg",
    status: CatStatus.stray,
    content: "大黄发动了如来神掌！反击吗？",
    result: "",
    yesEffects: [],
    noEffects: [],
    yesItemName: null,
    isChildEvent: true,
    yesEventID: "st_9",
    noEventID: "st_13",
    newStatus: null,
  },
  {
    id: "st_9",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_9.jpg",
    status: CatStatus.stray,
    content:
      "战况千钧一发，这条街的老大橘面佛来调停了，你俩只好悻悻地走开。橘面佛似乎很欣赏你",
    result: "获得了道具：橘面佛的认可",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 15,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 7,
      },
    ],
    noEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 15,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 7,
      },
    ],
    yesItemName: "橘面佛的认可",
    isChildEvent: true,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_13",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_13.jpg",
    status: CatStatus.stray,
    content: "向大黄低头，算是躲过了这一遭",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: -15,
      },
    ],
    noEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: -15,
      },
    ],
    yesItemName: null,
    isChildEvent: true,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_10",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_10.jpg",
    status: CatStatus.stray,
    content: "她是我不想醒来的梦。",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 12,
      },
    ],
    noEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.knowledge,
        delta: 12,
      },
      {
        __typename: "EventEffect",
        key: CatAttribute.wilderness,
        delta: 12,
      },
    ],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_11",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_11.jpg",
    status: CatStatus.stray,
    content: "偶然路过这个钢铁四脚兽，有种熟悉的令喵怀念的气味……",
    result: "盘踞在车底等待，成功和铲屎的重逢",
    yesEffects: [],
    noEffects: [],
    yesItemName: null,
    isChildEvent: false,
    yesEventID: "st_12",
    noEventID: null,
    newStatus: null,
  },
  {
    id: "st_12",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_12.jpg",
    status: CatStatus.stray,
    content:
      "铲屎的很开心，抱着我刚想亲，发现头上的蛛网又把我放下了，不过还是给了好吃的。回家的感觉真好",
    result: "",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: 10,
      },
    ],
    noEffects: [],
    yesItemName: null,
    isChildEvent: true,
    yesEventID: null,
    noEventID: null,
    newStatus: CatStatus.inHouse,
  },
  {
    id: "st_14",
    title: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/st_14.jpg",
    status: CatStatus.stray,
    content:
      "在家的时候，翻这个圆形的筒会被铲屎的凶，现在终于有机会了？不过闻起来好臭……",
    result: "顶着窒息的风险，在桶底发现了奇妙的碎片",
    yesEffects: [
      {
        __typename: "EventEffect",
        key: CatAttribute.health,
        delta: -12,
      },
    ],
    noEffects: [],
    yesItemName: "拼图碎片1",
    isChildEvent: false,
    yesEventID: null,
    noEventID: null,
    newStatus: null,
  },
];

export default strayEvents;
