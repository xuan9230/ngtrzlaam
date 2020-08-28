export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CatAttribute {
  Health = "health",
  Wilderness = "wilderness",
  Knowledge = "knowledge",
}

export enum CatStatus {
  InHouse = "inHouse",
  Stray = "stray",
  Finished = "finished",
}

export type Cat = {
  __typename?: "Cat";
  id: Scalars["ID"];
  name: Scalars["String"];
  imgUrl: Scalars["String"];
  health: Scalars["Int"];
  wilderness: Scalars["Int"];
  knowledge: Scalars["Int"];
  age: Scalars["Int"];
  owner: User;
  /** Events the cat has triggered */
  eventIDs: Array<Scalars["ID"]>;
  status: CatStatus;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  cats: Array<Cat>;
};

export type EventEffect = {
  __typename?: "EventEffect";
  key?: Maybe<CatAttribute>;
  delta: Scalars["Int"];
};

export type Event = {
  __typename?: "Event";
  id: Scalars["ID"];
  imgUrl: Scalars["String"];
  /** Required cat status that this event can happen to */
  status: CatStatus;
  /** Event title */
  title?: Maybe<Scalars["String"]>;
  /** Event content */
  content: Scalars["String"];
  /** Optional result message after user's selection */
  result?: Maybe<Scalars["String"]>;
  /** Effects when selecting yes */
  yesEffects: Array<EventEffect>;
  /** Effects when selecting no */
  noEffects: Array<EventEffect>;
};

export type CatInput = {
  name?: Maybe<Scalars["String"]>;
  knowledge?: Maybe<Scalars["Int"]>;
  wilderness?: Maybe<Scalars["Int"]>;
  health?: Maybe<Scalars["Int"]>;
  ownerId?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  cat?: Maybe<Cat>;
  cats: Array<Cat>;
  events: Array<Event>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryCatArgs = {
  id: Scalars["ID"];
};

export type QueryCatsArgs = {
  ownerId: Scalars["ID"];
};

export type QueryEventsArgs = {
  catId: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCat: Cat;
  updateCat: Cat;
  deleteCat: Cat;
};

export type MutationCreateCatArgs = {
  ownerId: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationUpdateCatArgs = {
  id: Scalars["ID"];
  updates?: Maybe<CatInput>;
};

export type MutationDeleteCatArgs = {
  id: Scalars["ID"];
};

export type GetCatsQueryVariables = {
  ownerId: Scalars["ID"];
};

export type GetCatsQuery = { __typename?: "Query" } & {
  cats: Array<
    { __typename?: "Cat" } & Pick<Cat, "id" | "name" | "imgUrl" | "status">
  >;
};

export type GetCatQueryVariables = {
  id: Scalars["ID"];
};

export type GetCatQuery = { __typename?: "Query" } & {
  cat?: Maybe<
    { __typename?: "Cat" } & Pick<
      Cat,
      | "id"
      | "name"
      | "status"
      | "imgUrl"
      | "health"
      | "wilderness"
      | "knowledge"
      | "age"
      | "eventIDs"
    >
  >;
};

export type GetEventsQueryVariables = {
  catId: Scalars["ID"];
};

export type GetEventsQuery = { __typename?: "Query" } & {
  events: Array<
    { __typename?: "Event" } & Pick<
      Event,
      "id" | "imgUrl" | "title" | "status" | "content" | "result"
    > & {
        yesEffects: Array<
          { __typename?: "EventEffect" } & Pick<EventEffect, "key" | "delta">
        >;
        noEffects: Array<
          { __typename?: "EventEffect" } & Pick<EventEffect, "key" | "delta">
        >;
      }
  >;
};

export type UpdateCatMutationVariables = {
  id: Scalars["ID"];
  updates?: Maybe<CatInput>;
};

export type UpdateCatMutation = { __typename?: "Mutation" } & {
  updateCat: { __typename?: "Cat" } & Pick<
    Cat,
    "id" | "health" | "wilderness" | "knowledge"
  >;
};

export type GetUsersQueryVariables = {};

export type GetUsersQuery = { __typename?: "Query" } & {
  users: Array<{ __typename?: "User" } & Pick<User, "id" | "name">>;
};
