/* tslint:disable */
/* eslint-disable */
/* @relayHash 9d75ff2cded360e6f3dd6df2a3c008bf */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CatPageQueryVariables = {
    ownerId: string;
};
export type CatPageQueryResponse = {
    readonly Cats: ReadonlyArray<{
        readonly name: string;
        readonly " $fragmentRefs": FragmentRefs<"CatComponent_cat">;
    } | null> | null;
};
export type CatPageQuery = {
    readonly response: CatPageQueryResponse;
    readonly variables: CatPageQueryVariables;
};



/*
query CatPageQuery(
  $ownerId: ID!
) {
  Cats(ownerId: $ownerId) {
    name
    ...CatComponent_cat
    id
  }
}

fragment CatComponent_cat on Cat {
  id
  knowledge
  health
  cuteness
  birthday
  Owner {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ownerId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ownerId",
    "variableName": "ownerId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CatPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Cats",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Cat",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CatComponent_cat",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CatPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Cats",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Cat",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "knowledge",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "health",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cuteness",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "birthday",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Owner",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CatPageQuery",
    "id": null,
    "text": "query CatPageQuery(\n  $ownerId: ID!\n) {\n  Cats(ownerId: $ownerId) {\n    name\n    ...CatComponent_cat\n    id\n  }\n}\n\nfragment CatComponent_cat on Cat {\n  id\n  knowledge\n  health\n  cuteness\n  birthday\n  Owner {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '09a92dd381252a46c533ffdceb2b9bd8';
export default node;
