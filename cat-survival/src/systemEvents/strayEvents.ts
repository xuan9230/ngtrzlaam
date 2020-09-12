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
    isChildEvent: false,
    childEventID: null,
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
    isChildEvent: false,
    childEventID: null,
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
    isChildEvent: false,
    childEventID: null,
    newStatus: null,
  },
];

export default strayEvents;
