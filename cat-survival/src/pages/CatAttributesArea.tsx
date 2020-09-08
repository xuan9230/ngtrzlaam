import React from "react";

import Typography from "@material-ui/core/Typography";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import { Cat } from "../baseTypes";
import { Row, Column } from "../components";
import VerticalProgressBar from "../components/VerticalProgressBar";

export default function CatAttributesArea({
  style,
  cat,
}: {
  style?: any;
  cat: Omit<Cat, "owner">;
}) {
  function renderAttribute(
    label: string,
    value: number,
    backgroundColor: string
  ) {
    return (
      <Column>
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
          <VerticalProgressBar
            progress={value}
            backgroundColor={backgroundColor}
          />
        )}

        <div style={{ marginTop: 8 }}>
          <Typography variant="subtitle1">{label}</Typography>
        </div>
      </Column>
    );
  }

  return (
    <Row
      style={{
        ...style,
        justifyContent: "space-evenly",
      }}
    >
      {renderAttribute("健康", cat.health, "#ff7675")}
      {renderAttribute("知识", cat.knowledge, "#74b9ff")}
      {renderAttribute("野性", cat.wilderness, "#fdcb6e")}
    </Row>
  );
}
