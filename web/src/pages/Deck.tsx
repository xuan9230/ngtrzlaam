import React, { useState } from "react";
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
import EventSection from "./EventSection";

const CAT_DETAILS_QUERY = gql`
  query getCat($id: ID!) {
    cat(id: $id) {
      id
      name
      status
      imgUrl
      health
      wilderness
      knowledge
      age
      eventIds
    }
  }
`;

export default function Deck({ catId }: { catId: Scalars["ID"] }) {
  const [showDrawer, setShowDrawer] = useState(false);

  // Fetch cat details
  const { loading, error, data, fetchMore } = useQuery<
    GetCatQuery,
    GetCatQueryVariables
  >(CAT_DETAILS_QUERY, {
    variables: {
      id: catId,
    },
  });

  if (error) return <p>Error fetching cat:(</p>;
  if (!(data && data.cat) || loading) return <LinearProgress />;

  return (
    <Container>
      <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </MenuButton>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea style={{ marginBottom: 16 }} cat={data.cat} />

      <EventSection cat={data.cat} />
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
