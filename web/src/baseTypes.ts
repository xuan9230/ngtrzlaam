import { GetCatQuery, GetEventQuery } from "./API";

export interface Cat
  extends Omit<Exclude<GetCatQuery["getCat"], null>, "__typename"> {}

export interface Event
  extends Omit<Exclude<GetEventQuery["getEvent"], null>, "__typename"> {}

export enum CatAttribute {
  health,
  wilderness,
  knowledge,
}

export enum CatStatus {
  inHouse,
  stray,
  finished,
}

export type EventEffect = {
  __typename?: "EventEffect";
  key: CatAttribute;
  delta: number;
};
