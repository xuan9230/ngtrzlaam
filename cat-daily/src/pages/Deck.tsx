import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";

import CatAttributesArea from "./CatAttributesArea";
import SideDrawer from "../components/SideDrawer";
import EventCard from "../components/EventCard";

import {
  GetEventsQuery,
  GetEventsQueryVariables,
  Cat,
  Event,
} from "../generated/graphql";
import { useDeck } from "../providers/DeckProvider";
import { LinearProgress } from "@material-ui/core";
import actionTypes from "../types/actionTypes";

const EVENTS_QUERY = gql`
  query getEvents($catId: ID!) {
    events(catId: $catId) {
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

export default function Deck({ cat }: { cat: Cat }) {
  const [showDrawer, setShowDrawer] = useState(false);
  // const [events, setEvents] = useState<Event[]>([]);
  const {
    state: { eventMap },
    dispatch,
  } = useDeck();

  // TODO: fetchMore
  const { loading, error, data, fetchMore } = useQuery<
    GetEventsQuery,
    GetEventsQueryVariables
  >(EVENTS_QUERY, {
    variables: {
      catId: cat.id,
    },
  });

  // Put fetch result in state
  useEffect(() => {
    if (data) {
      console.log("put int state");
      const eventMap: {
        [eventId: string]: Event;
      } = {};
      data.events.forEach((e) => (eventMap[e.id] = e));
      dispatch({
        type: actionTypes.SET_EVENTS,
        eventMap,
      });
    }
  }, [data, dispatch]);

  if (error) return <p>Error fetching events:(</p>;
  if (loading || !(eventMap && Object.keys(eventMap).length))
    return <LinearProgress />;

  console.log("events: ", eventMap);
  return (
    <Container>
      <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </MenuButton>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea style={{ marginBottom: 16 }} />

      <EventCard
        event={Object.values(eventMap)[0]}
        onSwipe={(eventId) => {
          const newEventMap = { ...eventMap };
          delete eventMap[eventId];
          dispatch({
            type: actionTypes.SET_EVENTS,
            eventMap: newEventMap,
          });
        }}
      />
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
