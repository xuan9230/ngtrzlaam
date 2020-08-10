/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
