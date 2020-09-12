/**
 * Event card section for a cat
 */

import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import EventCard from "../components/EventCard";

import systemEvents from "../systemEvents";
import { Cat, Event } from "../baseTypes";
import { CatStatus } from "../API";

// const EVENTS_QUERY = gql`
//   query getEvents($catId: ID!) {
//     events(catId: $catId) {
//       id
//       imgUrl
//       title
//       status
//       content
//       result
//       yesEffects {
//         key
//         delta
//       }
//       noEffects {
//         key
//         delta
//       }
//     }
//   }
// `;

const EVENTS_PER_DAY = 5;

const UPDATE_CAT = gql`
  mutation updateCat($input: UpdateCatInput!) {
    updateCat(input: $input) {
      id
      age
      health
      wilderness
      health
      status
      eventIDs
    }
  }
`;

export default function EventSection({ cat }: { cat: Omit<Cat, "owner"> }) {
  // TODO - Fetch custom events
  // const { loading: fetchEventsLoading, error, data, fetchMore } = useQuery<
  //   GetEventsQuery,
  //   GetEventsQueryVariables
  // >(EVENTS_QUERY, {
  //   variables: {
  //     catId: cat.id,
  //   },
  // });

  // Update cat
  const [
    updateCat,
    // { loading: updateCatLoading }
  ] = useMutation(UPDATE_CAT);
  const [result, setResult] = React.useState<null | string>(null);

  // Get events that the cat hasn't encountered
  const catRef = React.useRef(cat);
  catRef.current = cat;

  const events = React.useMemo(() => {
    const _events: Omit<Event, "createdAt" | "updatedAt">[] = [];
    const catEventIdMap: { [id: string]: boolean } = {};
    catRef.current.eventIDs.forEach((id) => (catEventIdMap[id] = true));
    let i = 0;

    while (_events.length < EVENTS_PER_DAY && i < systemEvents.length) {
      const event = systemEvents[i];
      if (!catEventIdMap[event.id]) {
        _events.push(event);
      }
      i++;
    }

    return _events;
  }, []);

  // if (error) return <p>Error fetching events:(</p>;
  // if (fetchEventsLoading || !(data && data.events)) return <LinearProgress />;

  /**
   * Calculate new cat attributes based on event effects
   * And update on the server
   */
  function handleUpdateCat(
    event: Omit<Event, "createdAt" | "updatedAt">,
    decision: boolean
  ) {
    // Set result if any
    if (decision && event.result) {
      setResult(event.result);
    } else {
      setResult(null);
    }

    // Need to get cat from ref, as the TinderCard reserves obsolete callback
    const { health, wilderness, knowledge } = catRef.current;
    const attributeUpdates: any = {
      health,
      wilderness,
      knowledge,
    };
    let willCatFinish = false;

    const resultEffects = event.noEffects
      ? event.noEffects
      : event.yesEffects.map((effect) => ({
          ...effect,
          delta: -effect.delta,
        }));

    resultEffects.forEach((effect) => {
      const { key, delta } = effect;
      if (!key) throw new Error("Event effect must contain attribute key");

      const updatedAttribute = attributeUpdates[key] + delta;
      attributeUpdates[key] = updatedAttribute;

      if (updatedAttribute > 100 || updatedAttribute < 0) {
        willCatFinish = true;
      }
    });

    const updates = {
      ...attributeUpdates,
      id: cat.id,
      eventIDs: [...catRef.current.eventIDs, event.id],
      age: catRef.current.age + 1,
    };

    if (willCatFinish) updates.status = CatStatus.finished;

    updateCat({
      variables: {
        input: updates,
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateCat: {
          ...updates,
          __typename: "Cat",
        },
      },
    });
  }

  /**
   * Render a dialog if the decision incurs a event result
   */
  function renderResult() {
    if (!result) return;

    return (
      <Dialog onClose={() => setResult(null)} open={!!result}>
        <DialogTitle>{result}</DialogTitle>
      </Dialog>
    );
  }

  return (
    <CardsContainer>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            handleUpdateCat={handleUpdateCat}
          />
        );
      })}
      {renderResult()}
      <Typography variant="body1" style={{ marginTop: 56 }}>
        猫累了，明天再来吧
      </Typography>
    </CardsContainer>
  );
}

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
`;
