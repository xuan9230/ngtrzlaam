/**
 * Event card section for a cat
 */

import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
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

  return (
    <CardsContainer>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onEventEffects={(eventEffects: EventEffect[]) =>
            dispatch({
              type: actionTypes.UPDATE_CAT_ATTRIBUTES,
              eventEffects,
            })
          }
        />
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
