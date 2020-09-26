/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          eventIDs
          status
          itemNames
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          eventIDs
          status
          itemNames
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          eventIDs
          status
          itemNames
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
export const onCreateCat = /* GraphQL */ `
  subscription OnCreateCat {
    onCreateCat {
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
      eventIDs
      status
      itemNames
      history {
        days
        reason
        isMaxedOut
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCat = /* GraphQL */ `
  subscription OnUpdateCat {
    onUpdateCat {
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
      eventIDs
      status
      itemNames
      history {
        days
        reason
        isMaxedOut
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCat = /* GraphQL */ `
  subscription OnDeleteCat {
    onDeleteCat {
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
      eventIDs
      status
      itemNames
      history {
        days
        reason
        isMaxedOut
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      isChildEvent
      yesEventID
      noEventID
      status
      imgUrl
      content
      title
      result
      yesEffects {
        key
        delta
      }
      noEffects {
        key
        delta
      }
      yesItemName
      newStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      isChildEvent
      yesEventID
      noEventID
      status
      imgUrl
      content
      title
      result
      yesEffects {
        key
        delta
      }
      noEffects {
        key
        delta
      }
      yesItemName
      newStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      isChildEvent
      yesEventID
      noEventID
      status
      imgUrl
      content
      title
      result
      yesEffects {
        key
        delta
      }
      noEffects {
        key
        delta
      }
      yesItemName
      newStatus
      createdAt
      updatedAt
    }
  }
`;
