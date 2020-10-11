import React from "react";
import Typography from "@material-ui/core/Typography";

import { Cat } from "../baseTypes";
import { Row, Column } from "../components";
import VerticalProgressBar from "../components/VerticalProgressBar";

export default function CatAttributesArea({ cat }: { cat: Cat }) {
  function renderAttribute(label: string, value: number, color: string) {
    return (
      <Column>
        <VerticalProgressBar progress={value} color={color} />

        <div style={{ marginTop: 8 }}>
          <Typography variant="subtitle1">{label}</Typography>
        </div>
      </Column>
    );
  }

  return (
    <Row
      style={{
        margin: 16,
        justifyContent: "space-evenly",
      }}
    >
      {renderAttribute("健康", cat.health, "#cc313d")}
      {renderAttribute("知识", cat.knowledge, "#e5989e")}
      {renderAttribute("野性", cat.wilderness, "#f7c5cc")}
    </Row>
  );
}
