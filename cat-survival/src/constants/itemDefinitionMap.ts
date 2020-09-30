import { Item } from "../baseTypes";

const itemDefinitionMap: {
  [itemName: string]: Item;
} = {
  橘面佛的认可: {
    name: "橘面佛的认可",
    description: "鱼骨吊坠，强韧街头猫的证明",
    effect: "属性增益+20%",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/it_1.jpg",
  },
  月饼券: {
    name: "月饼券",
    description: "向网管出示会有意想不到的效果",
    effect: "脂肪+30%",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/it_2.jpg",
  },
  拼图碎片1: {
    name: "拼图碎片1",
    description: "不知能拼出什么呢",
    effect: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/it_3.jpg",
  },
  炫酷眼镜: {
    name: "炫酷眼镜",
    description: "拨开尘世的迷雾，预知选择的效果",
    effect: "",
    imgUrl:
      "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/it_4.jpg",
  },
};

export default itemDefinitionMap;
