import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function EventCard() {
  return (
    <TinderCard
      onSwipe={direction => {
        console.log("You swiped: " + direction);
      }}
      // @ts-ignore
      onCardLeftScreen={() => {
        console.log("a card left the screen");
      }}
    >
      <CardContainer>
        <CardImage
          image="https://img.gmz88.com/uploadimg/ico/2019/1108/1573177142153102.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
