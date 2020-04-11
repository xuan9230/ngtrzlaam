import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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


export const UserListDocument = gql`
    query UserList {
  users {
    id
    name
  }
}
    `;
export type UserListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserListQuery, UserListQueryVariables>, 'query'>;

    export const UserListComponent = (props: UserListComponentProps) => (
      <ApolloReactComponents.Query<UserListQuery, UserListQueryVariables> query={UserListDocument} {...props} />
    );
    
export type UserListProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserListQuery, UserListQueryVariables> & TChildProps;
export function withUserList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserListQuery,
  UserListQueryVariables,
  UserListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserListQuery, UserListQueryVariables, UserListProps<TChildProps>>(UserListDocument, {
      alias: 'userList',
      ...operationOptions
    });
};

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        return ApolloReactHooks.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
      }
export function useUserListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = ApolloReactCommon.QueryResult<UserListQuery, UserListQueryVariables>;