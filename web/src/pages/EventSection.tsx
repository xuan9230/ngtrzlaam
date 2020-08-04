/**
 * Event card section for a cat
 */

import React, { useEffect } from "react";
import produce from "immer";
import styled from "styled-components";
import { useQuery, gql, useMutation } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";

import {
  GetEventsQuery,
  GetEventsQueryVariables,
  Scalars,
  EventEffect,
} from "../generated/graphql";
import { useDeck } from "../providers/DeckProvider";
import actionTypes from "../types/actionTypes";
import EventCard from "../components/EventCard";

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

const UPDATE_CAT = gql`
  mutation updateCat($id: ID!, data: CatInput) {
    updateCat(id: $id, data: $data) {
      id
      health
      wilderness
      knowledge
    }
  }
`;

export default function EventSection({ catId }: { catId: Scalars["ID"] }) {
  const {
    state: { events },
    dispatch,
  } = useDeck();

  // Fetch events
  const { loading, error, data, fetchMore } = useQuery<
    GetEventsQuery,
    GetEventsQueryVariables
  >(EVENTS_QUERY, {
    variables: {
      catId,
    },
  });

  // Update cat
  const [updateCat, { data: updatedCat }] = useMutation(UPDATE_CAT);

  // Put fetch result in state
  useEffect(() => {
    if (data) {
      dispatch({
        type: actionTypes.SET_EVENTS,
        events: data.events,
      });
    }
  }, [data, dispatch]);

  if (error) return <p>Error fetching events:(</p>;
  if (loading || !(events && events.length)) return <LinearProgress />;

  /**
   * Calculate new cat attributes based on event effects
   * And update on the server
   */
  function updateCat(eventEffects: EventEffect[]) {
    // const updatedCat = produce(cat, (draftCat) => {
    //   if (!draftCat) return undefined;
    //   action.eventEffects.forEach((effect) => {
    //     const { key, delta } = effect;
    //     if (!key) throw new Error("Event effect must contain attribute key");
    //     draftCat[key] = draftCat[key] + delta;
    //   });
    // });
  }

  return (
    <CardsContainer>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onEventEffects={updateCat} />
      ))}
      <Typography variant="body1" style={{ marginTop: 56 }}>
        猫累了，明天再来吧
      </Typography>
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
`;
