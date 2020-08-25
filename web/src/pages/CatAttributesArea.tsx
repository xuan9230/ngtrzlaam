import React from "react";
import styled from "styled-components";

import { lighten, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import { Cat } from "../baseTypes";

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
  function renderAttribute(label: string, value: number) {
    return (
      <Row>
        <Typography variant="subtitle1">{label}</Typography>
        {value > 100 || value < 0 ? (
          <div
            style={{
              width: 120,
              marginLeft: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SentimentVeryDissatisfiedIcon />
          </div>
        ) : (
          <BorderLinearProgress variant="determinate" value={value} />
        )}
      </Row>
    );
  }

  return (
    <Container style={style}>
      <Row>
        <Typography variant="h6" style={{ marginRight: 8 }}>
          {cat.name}
        </Typography>
        <Typography variant="body2">({cat.age} days)</Typography>
      </Row>

      {renderAttribute("健康", cat.health)}
      {renderAttribute("知识", cat.knowledge)}
      {renderAttribute("野性", cat.wilderness)}
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
