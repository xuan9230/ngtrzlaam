import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { Cat, Item } from "../baseTypes";
import { Row, Column } from "../components";
import itemDefinitionMap from "../constants/itemDefinitionMap";

type AnchorElement = HTMLDivElement | null;

const UPDATE_CAT = gql`
  mutation updateCat($input: UpdateCatInput!) {
    updateCat(input: $input) {
      id
      itemNames
    }
  }
`;

export default function CatItemsArea({ cat }: { cat: Cat }) {
  const [updateCat] = useMutation(UPDATE_CAT);

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

  /**
   * Discard an item
   */
  function handleDiscardItem(itemName: string) {
    updateCat({
      variables: {
        input: {
          id: cat.id,
          itemNames: cat.itemNames.filter((name) => name !== itemName),
        },
      },
    });

    setAnchorElArr(InitialAnchorElArr);
  }

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
              <ItemHeader>
                <Typography variant="body1">{item.name}</Typography>
                <IconButton
                  style={{ padding: 0 }}
                  aria-label="menu"
                  onClick={() => handleDiscardItem(item.name)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </ItemHeader>

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
  margin-top: 32px;
  justify-content: space-evenly;
`;

const ItemHeader = styled(Row)`
  width: 100%;
  padding-bottom: 8px;
  align-items: center;
  justify-content: space-between;
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
