import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Event, EventEffect } from "../generated/graphql";

// img size: 360 * 280

export default function EventCard({
  event,
  handleUpdateCat,
}: {
  event: Event;
  handleUpdateCat: (eventEffects: EventEffect[]) => void;
}) {
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
