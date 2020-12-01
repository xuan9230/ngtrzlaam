import {
  CatAttribute,
  FinishType,
  GetCatQuery,
  GetEventQuery,
  GetUserQuery,
} from "./API";

export interface User
  extends Omit<Exclude<GetUserQuery["getUser"], null>, "__typename"> {}

export interface Cat
  extends Omit<Exclude<GetCatQuery["getCat"], null>, "__typename" | "owner"> {}

export interface Event
  extends Omit<
    Exclude<GetEventQuery["getEvent"], null>,
    "__typename" | "createdAt" | "updatedAt"
  > {}

export type EventEffect = {
  __typename?: "EventEffect";
  key: CatAttribute;
  delta: number;
};

export type AttributeRequirement = {
  __typename?: "AttributeRequirement";
  key: CatAttribute;
  value: number;
};

export type Item = {
  name: string;
  description: string;
  effect: string;
  imgUrl: string;
};

export type History = {
  type: FinishType;
  days: number;
  attribute: CatAttribute | null;
  scene: string | null;
};
