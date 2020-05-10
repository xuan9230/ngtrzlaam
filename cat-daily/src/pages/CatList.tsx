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

const CATS_QUERY = gql`
  query getCats($ownerId: ID!) {
    cats(ownerId: $ownerId) {
      id
      name
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

  if (loading) return <LinearProgress />;
  if (error || !data) return <p>Error fetching cats:(</p>;

  return (
    <List
      title="选择猫"
      records={data.cats}
      primaryKey="name"
      onClick={(cat: Cat) => {
        // TODO: save in local store
        console.log(cat);
        history.push("/deck");
      }}
    />
  );
}
