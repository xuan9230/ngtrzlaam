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
  // if (error) return <p>Error fetching events:(</p>;
  // if (fetchEventsLoading || !(data && data.events)) return <LinearProgress />;

  // Update cat
  const [
    updateCat,
    // { loading: updateCatLoading }
  ] = useMutation(UPDATE_CAT);
  const [result, setResult] = React.useState<null | string>(null);

  const catRef = React.useRef(cat);
  catRef.current = cat;

  // Get events that the cat hasn't encountered
  const events = React.useMemo(() => {
    const catEventIdMap: { [id: string]: boolean } = {};
    catRef.current.eventIDs.forEach((id) => (catEventIdMap[id] = true));

    const availableEvents = systemEvents[cat.status].filter(
      (event) => !catEventIdMap[event.id]
    );

    return shuffle(availableEvents);
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
          delta: decision ? effect.delta : -effect.delta,
        }));

    resultEffects.forEach((effect) => {
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
      eventIDs: [...catRef.current.eventIDs, event.id],
      age: catRef.current.age + 1,
    };

    if (willCatFinish) updates.status = CatStatus.finished;
    else if (event.newStatus) updates.status = event.newStatus;

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
  height: 360px;
  display: flex;
  justify-content: center;
`;
