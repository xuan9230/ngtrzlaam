/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum CatStatus {
  inHouse = "inHouse",
  stray = "stray",
  finished = "finished",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateCatInput = {
  id?: string | null,
  name: string,
  imgUrl: string,
  health: number,
  wilderness: number,
  knowledge: number,
  age: number,
  userID: string,
  eventIDs: Array< string >,
  status: CatStatus,
};

export type ModelCatConditionInput = {
  name?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  health?: ModelIntInput | null,
  wilderness?: ModelIntInput | null,
  knowledge?: ModelIntInput | null,
  age?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  eventIDs?: ModelIDInput | null,
  status?: ModelCatStatusInput | null,
  and?: Array< ModelCatConditionInput | null > | null,
  or?: Array< ModelCatConditionInput | null > | null,
  not?: ModelCatConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCatStatusInput = {
  eq?: CatStatus | null,
  ne?: CatStatus | null,
};

export type UpdateCatInput = {
  id: string,
  name?: string | null,
  imgUrl?: string | null,
  health?: number | null,
  wilderness?: number | null,
  knowledge?: number | null,
  age?: number | null,
  userID?: string | null,
  eventIDs?: Array< string > | null,
  status?: CatStatus | null,
};

export type DeleteCatInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  isChildEvent?: boolean | null,
  childEventID?: string | null,
  status: CatStatus,
  imgUrl: string,
  content: string,
  title?: string | null,
  result?: string | null,
  yesEffects: Array< EventEffectInput >,
  noEffects?: Array< EventEffectInput > | null,
  newStatus?: CatStatus | null,
};

export type EventEffectInput = {
  key: CatAttribute,
  delta: number,
};

export enum CatAttribute {
  health = "health",
  wilderness = "wilderness",
  knowledge = "knowledge",
}


export type ModelEventConditionInput = {
  isChildEvent?: ModelBooleanInput | null,
  childEventID?: ModelIDInput | null,
  status?: ModelCatStatusInput | null,
  imgUrl?: ModelStringInput | null,
  content?: ModelStringInput | null,
  title?: ModelStringInput | null,
  result?: ModelStringInput | null,
  newStatus?: ModelCatStatusInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEventInput = {
  id: string,
  isChildEvent?: boolean | null,
  childEventID?: string | null,
  status?: CatStatus | null,
  imgUrl?: string | null,
  content?: string | null,
  title?: string | null,
  result?: string | null,
  yesEffects?: Array< EventEffectInput > | null,
  noEffects?: Array< EventEffectInput > | null,
  newStatus?: CatStatus | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelCatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  health?: ModelIntInput | null,
  wilderness?: ModelIntInput | null,
  knowledge?: ModelIntInput | null,
  age?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  eventIDs?: ModelIDInput | null,
  status?: ModelCatStatusInput | null,
  and?: Array< ModelCatFilterInput | null > | null,
  or?: Array< ModelCatFilterInput | null > | null,
  not?: ModelCatFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  isChildEvent?: ModelBooleanInput | null,
  childEventID?: ModelIDInput | null,
  status?: ModelCatStatusInput | null,
  imgUrl?: ModelStringInput | null,
  content?: ModelStringInput | null,
  title?: ModelStringInput | null,
  result?: ModelStringInput | null,
  newStatus?: ModelCatStatusInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCatMutationVariables = {
  input: CreateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type CreateCatMutation = {
  createCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCatMutationVariables = {
  input: UpdateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type UpdateCatMutation = {
  updateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCatMutationVariables = {
  input: DeleteCatInput,
  condition?: ModelCatConditionInput | null,
};

export type DeleteCatMutation = {
  deleteCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCatQueryVariables = {
  id: string,
};

export type GetCatQuery = {
  getCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCatsQueryVariables = {
  filter?: ModelCatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCatsQuery = {
  listCats:  {
    __typename: "ModelCatConnection",
    items:  Array< {
      __typename: "Cat",
      id: string,
      name: string,
      imgUrl: string,
      health: number,
      wilderness: number,
      knowledge: number,
      age: number,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventIDs: Array< string >,
      status: CatStatus,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      isChildEvent: boolean | null,
      childEventID: string | null,
      status: CatStatus,
      imgUrl: string,
      content: string,
      title: string | null,
      result: string | null,
      yesEffects:  Array< {
        __typename: "EventEffect",
        key: CatAttribute,
        delta: number,
      } >,
      noEffects:  Array< {
        __typename: "EventEffect",
        key: CatAttribute,
        delta: number,
      } > | null,
      newStatus: CatStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CatsByUserQueryVariables = {
  userID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CatsByUserQuery = {
  catsByUser:  {
    __typename: "ModelCatConnection",
    items:  Array< {
      __typename: "Cat",
      id: string,
      name: string,
      imgUrl: string,
      health: number,
      wilderness: number,
      knowledge: number,
      age: number,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventIDs: Array< string >,
      status: CatStatus,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type EventsByStatusQueryVariables = {
  status?: CatStatus | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByStatusQuery = {
  eventsByStatus:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      isChildEvent: boolean | null,
      childEventID: string | null,
      status: CatStatus,
      imgUrl: string,
      content: string,
      title: string | null,
      result: string | null,
      yesEffects:  Array< {
        __typename: "EventEffect",
        key: CatAttribute,
        delta: number,
      } >,
      noEffects:  Array< {
        __typename: "EventEffect",
        key: CatAttribute,
        delta: number,
      } > | null,
      newStatus: CatStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    cats:  {
      __typename: "ModelCatConnection",
      items:  Array< {
        __typename: "Cat",
        id: string,
        name: string,
        imgUrl: string,
        health: number,
        wilderness: number,
        knowledge: number,
        age: number,
        userID: string,
        eventIDs: Array< string >,
        status: CatStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCatSubscription = {
  onCreateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCatSubscription = {
  onUpdateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCatSubscription = {
  onDeleteCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    imgUrl: string,
    health: number,
    wilderness: number,
    knowledge: number,
    age: number,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      cats:  {
        __typename: "ModelCatConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventIDs: Array< string >,
    status: CatStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    isChildEvent: boolean | null,
    childEventID: string | null,
    status: CatStatus,
    imgUrl: string,
    content: string,
    title: string | null,
    result: string | null,
    yesEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } >,
    noEffects:  Array< {
      __typename: "EventEffect",
      key: CatAttribute,
      delta: number,
    } > | null,
    newStatus: CatStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
