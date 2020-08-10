/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      owner {
        id
        name
        cats {
          id
          name
          imgUrl
          health
          wilderness
          knowledge
          age
          eventIds
          status
          createdAt
          updatedAt
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
        owner {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      cats {
        id
        name
        imgUrl
        health
        wilderness
        knowledge
        age
        owner {
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
          id
          name
          imgUrl
          health
          wilderness
          knowledge
          age
          eventIds
          status
          createdAt
          updatedAt
        }
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
      imgUrl
      status
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
        imgUrl
        status
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
