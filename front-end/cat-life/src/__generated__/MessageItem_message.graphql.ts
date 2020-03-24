/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MessageItem_message = {
    readonly date: unknown | null;
    readonly body: string;
    readonly " $refType": "MessageItem_message";
};
export type MessageItem_message$data = MessageItem_message;
export type MessageItem_message$key = {
    readonly " $data"?: MessageItem_message$data;
    readonly " $fragmentRefs": FragmentRefs<"MessageItem_message">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "MessageItem_message",
  "type": "Message",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
};
(node as any).hash = 'e6e0248d28eedf3afaf8820afdd4d7df';
export default node;
