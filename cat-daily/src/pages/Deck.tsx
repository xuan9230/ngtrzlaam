import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";

import CatAttributesArea from "./CatAttributesArea";
import SideDrawer from "../components/SideDrawer";
import EventCard from "../components/EventCard";

import {
  CatStatus,
  GetEventsQuery,
  GetEventsQueryVariables,
} from "../generated/graphql";

const EVENTS_QUERY = gql`
  query getEvents($status: CatStatus!) {
    events(status: $status) {
      id
      imgUrl
      title
      status
      content
      result
      yesEffects {
        key
        delta
      }
      noEffects {
        key
        delta
      }
    }
  }
`;

export default function Deck() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { loading, error, data } = useQuery<
    GetEventsQuery,
    GetEventsQueryVariables
  >(EVENTS_QUERY, {
    variables: {
      // TODO: use real cat status
      status: CatStatus.InHouse,
    },
  });

  if (error || !data) return <p>Error fetching events:(</p>;
  console.log(data.events);

  const sampleEvent = data.events[0];

  return (
    <Container>
      <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </MenuButton>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea style={{ marginBottom: 16 }} />
      <EventCard event={sampleEvent} />
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
