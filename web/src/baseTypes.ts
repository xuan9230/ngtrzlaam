import { GetCatQuery } from "./API";

export interface Cat
  extends Omit<Exclude<GetCatQuery["getCat"], null>, "__typename"> {}

export enum CatAttribute {
  health = "health",
  wilderness = "wilderness",
  knowledge = "knowledge",
}

export type EventEffect = {
  __typename?: "EventEffect";
  key: CatAttribute;
  delta: number;
};
