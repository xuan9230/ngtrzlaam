import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import { useFragment } from "react-relay/hooks";

import { Cat } from "./types";
import environment from "./relay-environment";

function dateDiffInDays(a: Date, b: Date): number {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function CatComponent({ cat }: { cat: Cat }) {
  // Queries
  const data: Cat = useFragment(
    graphql`
      fragment CatComponent_cat on Cat {
        id
        knowledge
        health
        cuteness
        birthday
      }
    `,
    cat as any
  );

  function addHealth() {
    return commitMutation(environment, {
      mutation: graphql`
        mutation CatComponentMutation($id: ID!, $updates: CatInput) {
          updateCat(id: $id, input: $updates) {
            id
            health
          }
        }
      `,
      variables: {
        id: data.id,
        updates: {
          health: data.health + 10
        }
      },
      onCompleted: response => {} /* Mutation completed */,
      onError: error => {} /* Mutation errored */
    });
  }

  return (
    <div>
      <div>{data.name}</div>
      <div>{dateDiffInDays(new Date(data.birthday), new Date())} days old</div>

      <button onClick={addHealth}>Add health</button>

      <div>健康：{data.health}</div>
      <div>知识：{data.knowledge}</div>
      <div>萌度：{data.cuteness}</div>
    </div>
  );
}

export default CatComponent;
