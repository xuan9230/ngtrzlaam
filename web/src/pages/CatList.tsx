import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import { User, Cat } from "../generated/graphql";
import List from "../components/List";
import { useDeck } from "../providers/DeckProvider";
import actionTypes from "../types/actionTypes";
import { CardImage } from "../components/EventCard";
import styled from "styled-components";
import { CatsByUserQuery, CatsByUserQueryVariables } from "../API";

const CATS_QUERY = gql`
  query catsByUser($userID: ID!) {
    catsByUser(userID: $userID) {
      items {
        id
        name
        imgUrl
        status
      }
    }
  }
`;

export default function CatListWrapper() {
  const user: User | undefined = JSON.parse(localStorage.getItem("user")!);
  const history = useHistory();
  if (!user) {
    history.push("/login");
    return null;
  }

  return <CatList user={user} />;
}

function CatList({ user }: { user: User }) {
  const history = useHistory();
  const { loading, error, data } = useQuery<
    CatsByUserQuery,
    CatsByUserQueryVariables
  >(CATS_QUERY, {
    variables: {
      userID: user.id,
    },
  });
  const { dispatch } = useDeck();

  const cats = data?.catsByUser?.items;

  if (loading) return <LinearProgress />;
  if (error || !cats) return <p>Error fetching cats:(</p>;

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
      // @ts-ignore
      records={cats}
      primaryKey="name"
      renderItem={renderCat}
    />
  );
}

const CatCard = styled(Card)`
  margin: 16px;
`;
