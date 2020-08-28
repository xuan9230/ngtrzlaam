import { CatAttribute, GetCatQuery, GetEventQuery } from "./API";

export interface Cat
  extends Omit<Exclude<GetCatQuery["getCat"], null>, "__typename"> {}

export interface Event
  extends Omit<Exclude<GetEventQuery["getEvent"], null>, "__typename"> {}

export type EventEffect = {
  __typename?: "EventEffect";
  key: CatAttribute;
  delta: number;
};
