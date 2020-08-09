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
        <Typography variant="h6" style={{ marginRight: 8 }}>
          {cat.name}
        </Typography>
        <Typography variant="body2">({cat.age} days)</Typography>
      </Row>

      <Row>
        <Typography variant="subtitle1">健康</Typography>
        <BorderLinearProgress variant="determinate" value={cat.health} />
      </Row>
      <Row>
        <Typography variant="subtitle1">知识</Typography>
        <BorderLinearProgress variant="determinate" value={cat.knowledge} />
      </Row>
      <Row>
        <Typography variant="subtitle1">野性</Typography>
        <BorderLinearProgress variant="determinate" value={cat.wilderness} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
