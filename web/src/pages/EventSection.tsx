/**
 * Event card section for a cat
 */

import React from "react";
import styled from "styled-components";
import { useQuery, gql, useMutation } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";

import {
  GetEventsQuery,
  GetEventsQueryVariables,
  EventEffect,
  Cat,
} from "../generated/graphql";
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
  mutation updateCat($id: ID!, $updates: CatInput) {
    updateCat(id: $id, updates: $updates) {
      id
      health
      wilderness
      knowledge
    }
  }
`;

export default function EventSection({ cat }: { cat: Omit<Cat, "owner"> }) {
  // Fetch events
  const { loading: fetchEventsLoading, error, data, fetchMore } = useQuery<
    GetEventsQuery,
    GetEventsQueryVariables
  >(EVENTS_QUERY, {
    variables: {
      catId: cat.id,
    },
  });

  // Update cat
  const [updateCat, { loading: updateCatLoading }] = useMutation(UPDATE_CAT);

  const catRef = React.useRef(cat);
  catRef.current = cat;

  if (error) return <p>Error fetching events:(</p>;
  if (fetchEventsLoading || !(data && data.events)) return <LinearProgress />;

  /**
   * Calculate new cat attributes based on event effects
   * And update on the server
   */
  function handleUpdateCat(eventEffects: EventEffect[]) {
    // Need to get cat from ref, as the TinderCard reserves obsolete callback
    const { health, wilderness, knowledge } = catRef.current;
    const updates = {
      health,
      wilderness,
      knowledge,
    };

    eventEffects.forEach((effect) => {
      const { key, delta } = effect;
      if (!key) throw new Error("Event effect must contain attribute key");

      updates[key] = updates[key] + delta;
    });

    updateCat({
      variables: {
        id: cat.id,
        updates,
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateCat: {
          id: cat.id,
          __typename: "Cat",
          ...updates,
        },
      },
    });
  }

  return (
    <CardsContainer>
      {data.events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            handleUpdateCat={handleUpdateCat}
          />
        );
      })}
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
