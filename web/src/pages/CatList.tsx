import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import {
  User,
  Cat,
  GetCatsQuery,
  GetCatsQueryVariables,
} from "../generated/graphql";
import List from "../components/List";
import { useDeck } from "../providers/DeckProvider";
import actionTypes from "../types/actionTypes";
import { CardImage } from "../components/EventCard";
import styled from "styled-components";

const CATS_QUERY = gql`
  query getCats($ownerId: ID!) {
    cats(ownerId: $ownerId) {
      id
      name
      imgUrl
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

  function renderCat(cat: Cat) {
    return (
      <CatCard
        key={cat.id}
        onClick={() => {
          dispatch({
            type: actionTypes.SET_SELECTED_CAT_ID,
            catId: cat.id,
          });
          history.push("/deck");
        }}
      >
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
          {cat.name}
        </Typography>
        {cat.imgUrl && <CardImage image={cat.imgUrl} />}
      </CatCard>
    );
  }

  return (
    <List
      style={{ width: "100%" }}
      title="选择猫"
      records={data.cats}
      primaryKey="name"
      renderItem={renderCat}
    />
  );
}

const CatCard = styled(Card)`
  margin: 16px;
`;
