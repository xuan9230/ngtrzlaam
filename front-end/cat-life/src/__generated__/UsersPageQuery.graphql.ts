/* tslint:disable */
/* eslint-disable */
/* @relayHash ece101d71dab79884adf69e19f105083 */

import { ConcreteRequest } from "relay-runtime";
export type UsersPageQueryVariables = {};
export type UsersPageQueryResponse = {
    readonly Users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
    }>;
};
export type UsersPageQuery = {
    readonly response: UsersPageQueryResponse;
    readonly variables: UsersPageQueryVariables;
};



/*
query UsersPageQuery {
  Users {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "Users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
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
        "name": "name",
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
    "name": "UsersPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UsersPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UsersPageQuery",
    "id": null,
    "text": "query UsersPageQuery {\n  Users {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0c26439128333bc655067135ccc3863e';
export default node;
