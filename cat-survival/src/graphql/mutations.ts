/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCat = /* GraphQL */ `
  mutation CreateCat(
    $input: CreateCatInput!
    $condition: ModelCatConditionInput
  ) {
    createCat(input: $input, condition: $condition) {
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
export const updateCat = /* GraphQL */ `
  mutation UpdateCat(
    $input: UpdateCatInput!
    $condition: ModelCatConditionInput
  ) {
    updateCat(input: $input, condition: $condition) {
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
export const deleteCat = /* GraphQL */ `
  mutation DeleteCat(
    $input: DeleteCatInput!
    $condition: ModelCatConditionInput
  ) {
    deleteCat(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
