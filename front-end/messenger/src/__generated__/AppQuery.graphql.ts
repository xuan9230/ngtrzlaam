/* tslint:disable */
/* eslint-disable */
/* @relayHash e7c76b29329cdccb5443675766e24dfd */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly Messages: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"MessageItem_message">;
    }>;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  Messages {
    id
    ...MessageItem_message
  }
}

fragment MessageItem_message on Message {
  date
  body
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Messages",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "MessageItem_message",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Messages",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  Messages {\n    id\n    ...MessageItem_message\n  }\n}\n\nfragment MessageItem_message on Message {\n  date\n  body\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1cde9089010af21bb8c39c2386110b95';
export default node;
