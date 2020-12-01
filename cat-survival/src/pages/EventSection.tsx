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

export default function EventSection({ cat }: { cat: Cat }) {
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

  const catRef = React.useRef(cat);
  catRef.current = cat;

  // The next event (when then current event has a child event)
  const [childEvent, setChildEvent] = React.useState<null | Event>(null);
  // () => {
  //   const a = systemEvents["inHouse"].find((event) => event.id === "ih_26");
  //   if (a) return a;
  //   return null;
  // }

  const {
    inidividualEvents, // events that the cat hasn't encountered, or are repeatable
    childEventMap, // child events
  } = React.useMemo(() => {
    const catEventIdMap: { [id: string]: boolean } = {};
    catRef.current.eventIDs.forEach((id) => (catEventIdMap[id] = true));

    const inidividualEvents: Event[] = [];
    const childEventMap: {
      [id: string]: Event;
    } = {};

    systemEvents[cat.status].forEach((event) => {
      if (event.isChildEvent) childEventMap[event.id] = event;
      else if (event.repeatable || !catEventIdMap[event.id])
        inidividualEvents.push(event);
    });

    return {
      inidividualEvents: shuffle(inidividualEvents),
      childEventMap,
    };
  }, [cat.status]);

  /**
   * Calculate new cat attributes based on event effects
   * And update on the server
   */
  function handleUpdateCat(event: Event, decision: boolean) {
    // Set extra result text if exists
    if (decision && event.result) {
      setResult(event.result);
    } else {
      setResult(null);
    }

    // Calculatte attribute updates
    // Need to get cat from ref, as the TinderCard reserves obsolete callback
    const { health, wilderness, knowledge, itemNames } = catRef.current;
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
      attributeUpdates[key] = Math.floor(updatedAttribute);

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

    // New Status
    if (willCatFinish) updates.status = CatStatus.finished;
    else if (event.newStatus && decision) updates.status = event.newStatus;

    // New Items
    if (event.yesItemName)
      updates.itemNames = [...itemNames, event.yesItemName];

    // Next event
    if (decision) {
      if (event.yesEventID) setChildEvent(childEventMap[event.yesEventID]);
      else setChildEvent(null);
    } else {
      if (event.noEventID) setChildEvent(childEventMap[event.noEventID]);
      else setChildEvent(null);
    }

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
  function renderEvent(event: Event) {
    if (!event.repeatable) {
      const hasEncountered = catRef.current.eventIDs.includes(event.id);

      if (hasEncountered) return null;
    }

    const showEffects = catRef.current.itemNames.includes("炫酷眼镜");

    return (
      <EventCard
        key={event.id}
        event={event}
        handleUpdateCat={handleUpdateCat}
        showEffects={showEffects}
        cat={catRef.current}
      />
    );
  }

  return (
    <CardsContainer>
      {childEvent
        ? renderEvent(childEvent)
        : inidividualEvents.map(renderEvent)}
      <Typography variant="body1" style={{ marginTop: 56 }}>
        网管偷懒了，去催进度吧
      </Typography>

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
