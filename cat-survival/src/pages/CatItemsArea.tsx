import React from "react";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import { Cat } from "../baseTypes";
import { Row } from "../components";

export default function CatItemsArea({ cat }: { cat: Cat }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function renderItem(item: any) {
    return (
      <div>
        <ItemContainer onClick={(event) => setAnchorEl(event.currentTarget)}>
          {item}
        </ItemContainer>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography variant="body1" style={{ margin: 8 }}>
            无道具
          </Typography>
        </Popover>
      </div>
    );
  }

  return <ItemRow>{[null, null, null, null].map(renderItem)}</ItemRow>;
}

const ItemRow = styled(Row)`
  margin-top: 24px;
  justify-content: space-evenly;
`;

const ItemContainer = styled.div`
  cursor: pointer;
  border: 1px solid silver;
  border-radius: 3px;
  height: 48px;
  width: 48px;
`;
