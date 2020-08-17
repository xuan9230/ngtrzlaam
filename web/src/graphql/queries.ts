/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      cats {
        items {
          id
          name
          imgUrl
          health
          wilderness
          knowledge
          age
          userID
          eventIds
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cats {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCat = /* GraphQL */ `
  query GetCat($id: ID!) {
    getCat(id: $id) {
      id
      name
      imgUrl
      health
      wilderness
      knowledge
      age
      userID
      user {
        id
        name
        cats {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventIds
      status
      createdAt
      updatedAt
    }
  }
`;
export const listCats = /* GraphQL */ `
  query ListCats(
    $filter: ModelCatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imgUrl
        health
        wilderness
        knowledge
        age
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        eventIds
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      status
      imgUrl
      title
      content
      result
      yesEffects {
        key
        delta
      }
      noEffects {
        key
        delta
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        imgUrl
        title
        content
        result
        yesEffects {
          key
          delta
        }
        noEffects {
          key
          delta
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const catsByUser = /* GraphQL */ `
  query CatsByUser(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    catsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgUrl
        health
        wilderness
        knowledge
        age
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        eventIds
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventsByStatus = /* GraphQL */ `
  query EventsByStatus(
    $status: CatStatus
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        imgUrl
        title
        content
        result
        yesEffects {
          key
          delta
        }
        noEffects {
          key
          delta
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
