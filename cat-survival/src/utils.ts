import { CatAttribute } from "./API";

export function getAttributeLabel(attributeKey: CatAttribute) {
  switch (attributeKey) {
    case CatAttribute.health:
      return "健康";
    case CatAttribute.knowledge:
      return "知识";
    case CatAttribute.wilderness:
      return "野性";
    default:
      throw new Error(`Invalid effect attribute: ${attributeKey}`);
  }
}
