import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Event, EventEffect } from "../baseTypes";
import { Row, Column } from "../components/index";
import { CatAttribute } from "../API";

// img size: 360 * 280

export default function EventCard({
  event,
  handleUpdateCat,
  showEffects,
}: {
  event: Event;
  handleUpdateCat: (event: Event, decision: boolean) => void;
  showEffects: boolean;
}) {
  function renderEffects() {
    if (!showEffects) return null;

    function renderEffect(effect: EventEffect, isYes: boolean) {
      let label;

      switch (effect.key) {
        case CatAttribute.health:
          label = "健康";
          break;
        case CatAttribute.knowledge:
          label = "知识";
          break;
        case CatAttribute.wilderness:
          label = "野性";
          break;
        default:
          throw new Error("Invalid effect attribute");
      }

      return (
        <Typography
          variant="caption"
          style={{ color: isYes ? "#beef00" : "#ff1d58" }}
        >
          {label}: {effect.delta > 0 ? `+${effect.delta}` : effect.delta}
        </Typography>
      );
    }

    const noEffects =
      event.noEffects ||
      event.yesEffects.map((effect) => ({
        ...effect,
        delta: -effect.delta,
      }));

    return (
      <Row style={{ justifyContent: "space-between", marginTop: 8 }}>
        <Column style={{ alignItems: "flex-start" }}>
          {noEffects.map((effect) => renderEffect(effect, false))}
        </Column>
        <Column style={{ alignItems: "flex-start" }}>
          {event.yesEffects.map((effect) => renderEffect(effect, true))}
        </Column>
      </Row>
    );
  }

  return (
    <StyledCard
      onSwipe={(direction) => {
        if (direction === "right") handleUpdateCat(event, true);
        else if (direction === "left") handleUpdateCat(event, false);
      }}
      preventSwipe={["up", "down"]}
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
          {renderEffects()}
        </CardInfoContainer>
      </CardContainer>
    </StyledCard>
  );
}

const StyledCard = styled(TinderCard)`
  position: absolute;
  width: 100%;
`;

const CardContainer = styled(Card)`
  align-self: stretch;
`;

export const CardImage = styled(CardMedia)`
  height: 280px;
  width: 100%;
`;

const CardInfoContainer = styled(CardContent)`
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
