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

import { Event } from "../generated/graphql";

// img size: 360 * 280

export default function EventCard({ event }: { event: Event }) {
  function onYes() {
    console.log("yes");
  }

  function onNo() {
    console.log("no");
  }

  return (
    <TinderCard
      onSwipe={(direction) => {
        if (direction === "right") onYes();
        else if (direction === "left") onNo();
      }}
      // @ts-ignore
      onCardLeftScreen={() => {
        console.log("a card left the screen");
      }}
    >
      <CardContainer>
        <CardImage image={event.imgUrl} />

        <CardContent>
          {event.title && (
            <Typography gutterBottom variant="h5" component="h2">
              {event.title}
            </Typography>
          )}

          <Typography variant="body2" color="textSecondary" component="p">
            {event.content}
          </Typography>
        </CardContent>
      </CardContainer>

      <ButtonsContainer>
        <IconButton onClick={onNo}>
          <CrossIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={onYes}>
          <CheckIcon fontSize="large" />
        </IconButton>
      </ButtonsContainer>
    </TinderCard>
  );
}

const CardContainer = styled(Card)`
  align-self: stretch;
  /* max-width: 345px; */
`;

const CardImage = styled(CardMedia)`
  height: 280px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
