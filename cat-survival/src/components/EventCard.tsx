import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Event, EventEffect, AttributeRequirement, Cat } from "../baseTypes";
import { Row, Column } from "../components/index";
import { getAttributeLabel } from "../utils";

// img size: 360 * 280

export default function EventCard({
  event,
  handleUpdateCat,
  showEffects,
  cat,
}: {
  event: Event;
  handleUpdateCat: (event: Event, decision: boolean) => void;
  showEffects: boolean;
  cat: Cat;
}) {
  /**
   * Calculate which directions to prevent swipe based on event requirements
   */
  const preventSwipe = React.useMemo(() => {
    const preventSwipe = new Set();
    preventSwipe.add("up");
    preventSwipe.add("down");

    if (event.yesRequirements) {
      event.yesRequirements.forEach((requirement) => {
        if (cat[requirement.key] < requirement.value) preventSwipe.add("right");
      });
    }

    if (event.noRequirements) {
      event.noRequirements.forEach((requirement) => {
        if (cat[requirement.key] < requirement.value) preventSwipe.add("left");
      });
    }

    return Array.from(preventSwipe);
  }, [event, cat]);

  /**
   * Render an attribute requirement row
   */
  function renderRequirement(requirement: AttributeRequirement) {
    const label = getAttributeLabel(requirement.key);

    return (
      <Typography
        key={`${requirement.key}-${requirement.value}`}
        variant="caption"
        style={{ color: "#ff1d58" }}
      >
        需要：{label} {">"} {requirement.value}
      </Typography>
    );
  }

  /**
   * Render attribute requirements when making a selection, if any
   */
  function renderRequirements() {
    return (
      <Row style={{ justifyContent: "space-between", marginTop: 8 }}>
        <Column style={{ alignItems: "flex-start" }}>
          {event.noRequirements &&
            event.noRequirements.map((requirement) =>
              renderRequirement(requirement)
            )}
        </Column>
        <Column style={{ alignItems: "flex-start" }}>
          {event.yesRequirements &&
            event.yesRequirements.map((requirement) =>
              renderRequirement(requirement)
            )}
        </Column>
      </Row>
    );
  }

  /**
   * Render a event effect preview row
   */
  function renderEffect(effect: EventEffect, isYes: boolean) {
    const label = getAttributeLabel(effect.key);

    return (
      <Typography
        key={`${effect.key}-${effect.delta}`}
        variant="caption"
        style={{ color: isYes ? "#beef00" : "#ff1d58" }}
      >
        {label}: {effect.delta > 0 ? `+${effect.delta}` : effect.delta}
      </Typography>
    );
  }

  /**
   * Render effect deltas preview
   */
  function renderEffects() {
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
      preventSwipe={preventSwipe as string[]}
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
          {renderRequirements()}
          {showEffects && renderEffects()}
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
