/**
 * Event card section for a cat
 */

import React from "react";
import { shuffle } from "lodash-es";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import { Swipeable, direction } from "react-deck-swiper";

import EventCard from "../components/EventCard";

import systemEvents from "../systemEvents";
import { Cat, Event } from "../baseTypes";
import { CatStatus } from "../API";
import { applyItemToEffects } from "../helpers/item";

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

const UPDATE_CAT = gql`
  mutation updateCat($input: UpdateCatInput!) {
    updateCat(input: $input) {
      id
      age
      health
      knowledge
      wilderness
      status
      eventIDs
      itemNames
      history {
        days
        reason
        isMaxedOut
      }
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
  // if (error) return <p>Error fetching events:(</p>;
  // if (fetchEventsLoading || !(data && data.events)) return <LinearProgress />;

  // Update cat
  const [updateCat] = useMutation(UPDATE_CAT);
  const [result, setResult] = React.useState<null | string>(null);

  // Get events matching current status
  function getEvents() {
    const inidividualEvents: Event[] = [];

    const catEventIdMap: { [id: string]: boolean } = {};
    cat.eventIDs.forEach((id) => (catEventIdMap[id] = true));

    systemEvents[cat.status].forEach((event) => {
      if (!event.isChildEvent && !catEventIdMap[event.id])
        inidividualEvents.push(event);
    });

    return shuffle(inidividualEvents);
  }

  const [events, setEvents] = React.useState<Event[]>(() => {
    return getEvents();
  });
  React.useEffect(() => {
    setEvents(getEvents());
  }, [cat.status]);

  // The next event (when then current event has a child event)
  const [childEvent, setChildEvent] = React.useState<null | Event>(null);

  const {
    childEventMap, // child events
  } = React.useMemo(() => {
    const childEventMap: {
      [id: string]: Event;
    } = {};

    systemEvents[cat.status].forEach((event) => {
      if (event.isChildEvent) childEventMap[event.id] = event;
    });

    return {
      childEventMap,
    };
  }, [cat.status]);

  /**
   * Calculate new cat attributes based on event effects
   * And update on the server
   */
  function handleOnSwipe(event: Event, swapDirection: string) {
    const decision = swapDirection === direction.RIGHT;

    // Set extra result text if exists
    if (decision && event.result) {
      setResult(event.result);
    } else {
      setResult(null);
    }

    // Calculatte attribute updates
    // Need to get cat from ref, as the TinderCard reserves obsolete callback
    const { health, wilderness, knowledge, itemNames } = cat;
    const attributeUpdates: any = {
      health,
      wilderness,
      knowledge,
    };
    let willCatFinish = false;

    // Get the effects based on user's selection
    let resultEffects;
    // When selecting yes
    if (decision) resultEffects = event.yesEffects;
    // When selecting no
    else if (event.noEffects) resultEffects = event.noEffects;
    else
      resultEffects = event.yesEffects.map((effect) => ({
        ...effect,
        delta: -effect.delta,
      }));

    applyItemToEffects(resultEffects, itemNames).forEach((effect) => {
      const { key, delta } = effect;

      const updatedAttribute = attributeUpdates[key] + delta;
      attributeUpdates[key] = updatedAttribute;

      if (updatedAttribute > 100 || updatedAttribute < 0) {
        willCatFinish = true;
      }
    });

    const updates = {
      ...attributeUpdates,
      id: cat.id,
      eventIDs: [...cat.eventIDs, event.id],
      age: cat.age + 1,
    };

    // New Status
    if (willCatFinish) updates.status = CatStatus.finished;
    else if (event.newStatus && decision) updates.status = event.newStatus;

    // New Items
    if (event.yesItemName)
      updates.itemNames = [...itemNames, event.yesItemName];

    // Next event
    let nextEvent: Event | null = null;

    if (decision) {
      if (event.yesEventID) {
        nextEvent = childEventMap[event.yesEventID];
      }
    } else {
      if (event.noEventID) {
        nextEvent = childEventMap[event.noEventID];
      }
    }

    setChildEvent(nextEvent);

    if (!event.isChildEvent) setEvents(events.slice(1));

    if (!nextEvent) nextEvent = events[1];

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

  /**
   * Render a event card
   */
  function renderEvent() {
    const event = childEvent || events[0];

    const hasEncountered = cat.eventIDs.includes(event.id);

    if (hasEncountered) return null;

    const showEffects = cat.itemNames.includes("炫酷眼镜");

    return (
      <Swipeable
        onSwipe={(direction) => handleOnSwipe(event, direction)}
        fadeThreshold={80}
      >
        <EventCard key={event.id} event={event} showEffects={showEffects} />
      </Swipeable>
    );
  }

  return (
    <CardsContainer>
      {events.length > 0 ? (
        renderEvent()
      ) : (
        <Typography variant="body1" style={{ marginTop: 56 }}>
          网管偷懒了，去催进度吧
        </Typography>
      )}

      {renderResult()}
    </CardsContainer>
  );
}

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 376px;
  display: flex;
  justify-content: center;
`;
