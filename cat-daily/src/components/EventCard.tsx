import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Event } from "../generated/graphql";

// img size: 360 * 160

export default function EventCard({ event }: { event: Event }) {
  return (
    <TinderCard
      onSwipe={(direction) => {
        console.log("You swiped: " + direction);
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
    </TinderCard>
  );
}

const CardContainer = styled(Card)`
  align-self: stretch;
  /* max-width: 345px; */
`;

const CardImage = styled(CardMedia)`
  height: 160px;
`;
