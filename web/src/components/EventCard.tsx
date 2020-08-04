import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import { gql, useMutation } from "@apollo/client";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Event, EventEffect, Cat } from "../generated/graphql";

// img size: 360 * 280

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

export default function EventCard({
  event,
  handleUpdateCat,
  cat,
}: {
  event: Event;
  handleUpdateCat: (eventEffects: EventEffect[]) => void;
  cat: Omit<Cat, "owner">;
}) {
  // const [
  //   updateCat,
  //   { data: updatedCat, loading: updateCatLoading },
  // ] = useMutation(UPDATE_CAT);

  // /**
  //  * Calculate new cat attributes based on event effects
  //  * And update on the server
  //  */
  // function handleUpdateCat(eventEffects: EventEffect[]) {
  //   console.log("cat2", cat.health, cat.knowledge, cat.wilderness);
  //   const updates = {
  //     health: cat.health,
  //     wilderness: cat.wilderness,
  //     knowledge: cat.knowledge,
  //   };

  //   eventEffects.forEach((effect) => {
  //     const { key, delta } = effect;
  //     if (!key) throw new Error("Event effect must contain attribute key");

  //     updates[key] = updates[key] + delta;
  //   });

  //   updateCat({
  //     variables: {
  //       id: cat.id,
  //       updates,
  //     },
  //   });
  // }

  return (
    <StyledCard
      onSwipe={(direction) => {
        if (direction === "right") handleUpdateCat(event.yesEffects);
        else if (direction === "left") handleUpdateCat(event.noEffects);
      }}
    >
      <CardContainer>
        <CardImage image={event.imgUrl} />

        <CardInfoContainer>
          {event.title && (
            <Typography gutterBottom variant="h5" component="h2">
              {event.title}
            </Typography>
          )}

          <Typography variant="body2" color="textSecondary" component="p">
            {event.content}
          </Typography>
        </CardInfoContainer>
      </CardContainer>
    </StyledCard>
  );
}

const CardContainer = styled(Card)`
  align-self: stretch;
`;

const CardImage = styled(CardMedia)`
  height: 280px;
`;

const CardInfoContainer = styled(CardContent)`
  height: 80px;
  display: flex;
  align-items: center;
`;

const StyledCard = styled(TinderCard)`
  position: absolute;
  width: 100%;
`;
