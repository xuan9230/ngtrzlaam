import { CatAttribute, GetCatQuery, GetEventQuery, GetUserQuery } from "./API";

export interface User
  extends Omit<Exclude<GetUserQuery["getUser"], null>, "__typename"> {}

export interface Cat
  extends Omit<Exclude<GetCatQuery["getCat"], null>, "__typename"> {}

export interface Event
  extends Omit<Exclude<GetEventQuery["getEvent"], null>, "__typename"> {}

export type EventEffect = {
  __typename?: "EventEffect";
  key: CatAttribute;
  delta: number;
};
