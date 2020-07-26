import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import LinearProgress from "@material-ui/core/LinearProgress";

import {
  User,
  Cat,
  GetCatsQuery,
  GetCatsQueryVariables,
} from "../generated/graphql";
import List from "../components/List";
import { useDeck } from "../providers/DeckProvider";
import actionTypes from "../types/actionTypes";

const CATS_QUERY = gql`
  query getCats($ownerId: ID!) {
    cats(ownerId: $ownerId) {
      id
      name
      status
    }
  }
`;

export default function CatList() {
  const user: User = JSON.parse(localStorage.getItem("user")!);
  const { loading, error, data } = useQuery<
    GetCatsQuery,
    GetCatsQueryVariables
  >(CATS_QUERY, {
    variables: {
      ownerId: user.id,
    },
  });
  const history = useHistory();
  const { dispatch } = useDeck();

  if (loading) return <LinearProgress />;
  if (error || !data) return <p>Error fetching cats:(</p>;

  return (
    <List
      title="选择猫"
      records={data.cats}
      primaryKey="name"
      onClick={(cat: Cat) => {
        dispatch({
          type: actionTypes.SET_CURRENT_CAT,
          cat,
        });
        history.push("/deck");
      }}
    />
  );
}
