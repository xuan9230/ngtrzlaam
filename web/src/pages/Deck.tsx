import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";
import { LinearProgress } from "@material-ui/core";

import CatAttributesArea from "./CatAttributesArea";
import SideDrawer from "../components/SideDrawer";

import {
  Scalars,
  GetCatQuery,
  GetCatQueryVariables,
} from "../generated/graphql";
import { useDeck } from "../providers/DeckProvider";
import EventSection from "./EventSection";
import actionTypes from "../types/actionTypes";

const CAT_DETAILS_QUERY = gql`
  query getCat($id: ID!) {
    cat(id: $id) {
      id
      name
      status
      imgUrl
      health
      cuteness
      knowledge
      age
      eventIds
    }
  }
`;

export default function Deck({ catId }: { catId: Scalars["ID"] }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const {
    // state: { cat },
    dispatch,
  } = useDeck();

  // Fetch cat details
  const { loading, error, data, fetchMore } = useQuery<
    GetCatQuery,
    GetCatQueryVariables
  >(CAT_DETAILS_QUERY, {
    variables: {
      id: catId,
    },
  });

  // Put fetch result in state
  useEffect(() => {
    if (data && data.cat) {
      dispatch({
        type: actionTypes.SET_CURRENT_CAT,
        cat: data.cat,
      });
    }
  }, [data, dispatch]);

  if (error) return <p>Error fetching cat:(</p>;
  if (loading) return <LinearProgress />;

  return (
    <Container>
      <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </MenuButton>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea style={{ marginBottom: 16 }} />

      <EventSection catId={catId} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const MenuButton = styled(IconButton)`
  align-self: flex-end;
`;
