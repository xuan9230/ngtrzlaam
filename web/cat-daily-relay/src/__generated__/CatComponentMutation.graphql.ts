/* tslint:disable */
/* eslint-disable */
/* @relayHash 176c5db331cabfff41e2debc95850373 */

import { ConcreteRequest } from "relay-runtime";
export type CatInput = {
    name?: string | null;
    knowledge?: number | null;
    cuteness?: number | null;
    health?: number | null;
    birthday?: unknown | null;
    ownerId?: string | null;
};
export type CatComponentMutationVariables = {
    id: string;
    updates?: CatInput | null;
};
export type CatComponentMutationResponse = {
    readonly updateCat: {
        readonly id: string;
        readonly health: number;
    } | null;
};
export type CatComponentMutation = {
    readonly response: CatComponentMutationResponse;
    readonly variables: CatComponentMutationVariables;
};



/*
mutation CatComponentMutation(
  $id: ID!
  $updates: CatInput
) {
  updateCat(id: $id, input: $updates) {
    id
    health
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "updates",
    "type": "CatInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateCat",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "updates"
      }
    ],
    "concreteType": "Cat",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "health",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CatComponentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CatComponentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CatComponentMutation",
    "id": null,
    "text": "mutation CatComponentMutation(\n  $id: ID!\n  $updates: CatInput\n) {\n  updateCat(id: $id, input: $updates) {\n    id\n    health\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e06a3815e35394ce85ba35054a8ee81a';
export default node;
