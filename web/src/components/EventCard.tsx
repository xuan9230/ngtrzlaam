import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/CheckCircle";
import CrossIcon from "@material-ui/icons/Cancel";

import { Event, EventEffect } from "../generated/graphql";

// img size: 360 * 280

export default function EventCard({
  event,
  onEventEffects,
}: {
  event: Event;
  onEventEffects: (eventEffects: EventEffect[]) => void;
}) {
  function onYes() {
    console.log("yes:", event.yesEffects);
    onEventEffects(event.yesEffects);
  }

  function onNo() {
    console.log("no:", event.noEffects);
    onEventEffects(event.noEffects);
  }

  return (
    <StyledCard
      onSwipe={(direction) => {
        if (direction === "right") onYes();
        else if (direction === "left") onNo();
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

      <ButtonsContainer>
        <IconButton onClick={onNo}>
          <CrossIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={onYes}>
          <CheckIcon fontSize="large" />
        </IconButton>
      </ButtonsContainer>
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCard = styled(TinderCard)`
  position: absolute;
  width: 100%;
`;
