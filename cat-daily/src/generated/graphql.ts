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

export type Cat = {
   __typename?: 'Cat';
  id: Scalars['ID'];
  name: Scalars['String'];
  knowledge: Scalars['Int'];
  health: Scalars['Int'];
  cuteness: Scalars['Int'];
  birthday: Scalars['Date'];
  owner: User;
  eventHistories: Array<EventHistory>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  cats: Array<Cat>;
};

export type EventHistory = {
   __typename?: 'EventHistory';
  id: Scalars['ID'];
  cat: Cat;
  content: Scalars['String'];
  date: Scalars['Date'];
};


export type Query = {
   __typename?: 'Query';
  cat?: Maybe<Cat>;
  cats: Array<Cat>;
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
  birthday?: Maybe<Scalars['Date']>;
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

export type UserListQueryVariables = {};


export type UserListQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);
