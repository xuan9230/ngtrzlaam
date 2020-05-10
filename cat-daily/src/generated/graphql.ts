export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum CatAttribute {
  Health = 'health',
  Cuteness = 'cuteness',
  Knowledge = 'knowledge'
}

export enum CatStatus {
  InHouse = 'inHouse',
  Stray = 'stray',
  Finished = 'finished'
}

export type Cat = {
   __typename?: 'Cat';
  id: Scalars['ID'];
  name: Scalars['String'];
  imgUrl: Scalars['String'];
  health: Scalars['Int'];
  cuteness: Scalars['Int'];
  knowledge: Scalars['Int'];
  age: Scalars['Int'];
  owner: User;
  eventHistories: Array<EventHistory>;
  status: CatStatus;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  cats: Array<Cat>;
};

export type EventEffect = {
   __typename?: 'EventEffect';
  key?: Maybe<CatAttribute>;
  delta: Scalars['Int'];
};

export type Event = {
   __typename?: 'Event';
  id: Scalars['ID'];
  imgUrl: Scalars['String'];
  /** Required cat status that this event can happen to */
  status: CatStatus;
  /** Event title */
  title?: Maybe<Scalars['String']>;
  /** Event content */
  content: Scalars['String'];
  /** Optional result message after user's selection */
  result?: Maybe<Scalars['String']>;
  /** Effects when selecting yes */
  yesEffects: Array<EventEffect>;
  /** Effects when selecting no */
  noEffects: Array<EventEffect>;
};

export type EventHistory = {
   __typename?: 'EventHistory';
  id: Scalars['ID'];
  date: Scalars['Date'];
  cat: Cat;
  event: Event;
};


export type Query = {
   __typename?: 'Query';
  cat?: Maybe<Cat>;
  cats: Array<Cat>;
  events: Array<Event>;
  eventHistory?: Maybe<EventHistory>;
  eventHistories: Array<EventHistory>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCatArgs = {
  id: Scalars['ID'];
};


export type QueryCatsArgs = {
  ownerId: Scalars['ID'];
};


export type QueryEventsArgs = {
  status: CatStatus;
};


export type QueryEventHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryEventHistoriesArgs = {
  catId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type CatInput = {
  name?: Maybe<Scalars['String']>;
  knowledge?: Maybe<Scalars['Int']>;
  cuteness?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createCat: Cat;
  updateCat: Cat;
  deleteCat: Cat;
  createEventHistory: EventHistory;
};


export type MutationCreateCatArgs = {
  ownerId: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateCatArgs = {
  id: Scalars['ID'];
  data?: Maybe<CatInput>;
};


export type MutationDeleteCatArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventHistoryArgs = {
  catId: Scalars['ID'];
  content: Scalars['String'];
};

export type GetCatsQueryVariables = {
  ownerId: Scalars['ID'];
};


export type GetCatsQuery = (
  { __typename?: 'Query' }
  & { cats: Array<(
    { __typename?: 'Cat' }
    & Pick<Cat, 'id' | 'name'>
  )> }
);

export type GetEventsQueryVariables = {
  status: CatStatus;
};


export type GetEventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'imgUrl' | 'title' | 'status' | 'content' | 'result'>
    & { yesEffects: Array<(
      { __typename?: 'EventEffect' }
      & Pick<EventEffect, 'key' | 'delta'>
    )>, noEffects: Array<(
      { __typename?: 'EventEffect' }
      & Pick<EventEffect, 'key' | 'delta'>
    )> }
  )> }
);

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);
