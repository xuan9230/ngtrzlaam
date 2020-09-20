import React from "react";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";

import { Cat, Item } from "../baseTypes";
import { Row, Column } from "../components";
import itemDefinitionMap from "../constants/itemDefinitionMap";

type AnchorElement = HTMLDivElement | null;

export default function CatItemsArea({ cat }: { cat: Cat }) {
  const InitialAnchorElArr = [null, null, null, null];
  const [anchorElArr, setAnchorElArr] = React.useState<AnchorElement[]>(
    InitialAnchorElArr
  );

  /**
   * Item names for the four item slots.
   * Populate with empty string if no item
   */
  const itemNames = React.useMemo(() => {
    const _names = [...cat.itemNames];
    for (let i = 0, j = 4 - _names.length; i < j; i++) {
      _names.push("");
    }
    return _names;
  }, [cat.itemNames]);

  function renderItem(itemName: string, index: number) {
    const item: Item | null = itemDefinitionMap[itemName];

    const key = `item-${index}`;
    const anchorEl = anchorElArr[index];
    const open = Boolean(anchorEl);

    return (
      <div key={key}>
        <ItemContainer
          onClick={(event) => {
            const newElArr: AnchorElement[] = [...InitialAnchorElArr];
            newElArr[index] = event.currentTarget;
            setAnchorElArr(newElArr);
          }}
        >
          {item && <ItemImage image={item.imgUrl} />}
        </ItemContainer>
        <Popover
          id={key}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorElArr(InitialAnchorElArr)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {item ? (
            <ItemInfoContainer>
              <Typography variant="body1">{item.name}</Typography>
              <Divider style={{ width: "100%", margin: 4 }} />
              <Typography variant="caption">{item.effect}</Typography>
              <Typography variant="caption">{item.description}</Typography>
            </ItemInfoContainer>
          ) : (
            <Typography variant="body1" style={{ margin: 8 }}>
              无道具
            </Typography>
          )}
        </Popover>
      </div>
    );
  }
  return <ItemRow>{itemNames.map(renderItem)}</ItemRow>;
}

const ItemRow = styled(Row)`
  margin-top: 48px;
  justify-content: space-evenly;
`;

const ItemContainer = styled.div`
  cursor: pointer;
  border: 1px solid silver;
  border-radius: 3px;
  height: 48px;
  width: 48px;
`;

const ItemImage = styled(CardMedia)`
  height: 48px;
`;

const ItemInfoContainer = styled(Column)`
  align-items: flex-start;
  padding: 16px;
`;
