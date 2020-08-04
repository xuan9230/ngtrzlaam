import React from "react";
import styled from "styled-components";

import { lighten, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Cat } from "../generated/graphql";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    width: 120,
    marginLeft: 16,
    backgroundColor: lighten("#ff6c5c", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);

export default function CatAttributesArea({
  style,
  cat,
}: {
  style?: any;
  cat: Omit<Cat, "owner">;
}) {
  return (
    <Container style={style}>
      <Row>
        <Typography variant="h6">健康</Typography>
        <BorderLinearProgress variant="determinate" value={cat.health} />
      </Row>
      <Row>
        <Typography variant="h6">知识</Typography>
        <BorderLinearProgress variant="determinate" value={cat.knowledge} />
      </Row>
      <Row>
        <Typography variant="h6">野性</Typography>
        <BorderLinearProgress variant="determinate" value={cat.wilderness} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
