/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CatComponent_cat = {
    readonly knowledge: number;
    readonly health: number;
    readonly cuteness: number;
    readonly birthday: unknown;
    readonly Owner: {
        readonly name: string;
    };
    readonly " $refType": "CatComponent_cat";
};
export type CatComponent_cat$data = CatComponent_cat;
export type CatComponent_cat$key = {
    readonly " $data"?: CatComponent_cat$data;
    readonly " $fragmentRefs": FragmentRefs<"CatComponent_cat">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CatComponent_cat",
  "type": "Cat",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'd94220352aa73118952cea05844e33a1';
export default node;
