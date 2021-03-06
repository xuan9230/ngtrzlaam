import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import { LinearProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import CatAttributesArea from "./CatAttributesArea";
import CatItemsArea from "./CatItemsArea";
import SideDrawer from "../components/SideDrawer";

import EventSection from "./EventSection";
import { CatStatus, GetCatQuery, GetCatQueryVariables } from "../API";
import FinishPage from "./FinishPage";
import { Row } from "../components";

const CAT_DETAILS_QUERY = gql`
  query getCat($id: ID!) {
    getCat(id: $id) {
      id
      name
      status
      imgUrl
      health
      wilderness
      knowledge
      age
      eventIDs
      itemNames
      history {
        type
        attribute
        days
        sceneId
      }
    }
  }
`;

export default function Deck({ catId }: { catId: string }) {
  const history = useHistory();
  const [showDrawer, setShowDrawer] = useState(false);

  // Fetch cat details
  const { loading, error, data } = useQuery<GetCatQuery, GetCatQueryVariables>(
    CAT_DETAILS_QUERY,
    {
      variables: {
        id: catId,
      },
    }
  );

  function getStatusLabel(status: CatStatus) {
    switch (status) {
      case CatStatus.inHouse:
        return "居家";
      case CatStatus.stray:
        return "流浪";
      case CatStatus.finished:
        return "猫没了";
      default:
        return "";
    }
  }

  const cat = data?.getCat;

  if (error) return <p>Error fetching cat:(</p>;
  if (!(data && cat) || loading) return <LinearProgress />;

  return (
    <Container>
      <Header>
        <Row>
          <Typography variant="h6" style={{ marginRight: 8 }}>
            {cat.name} {cat.history.length > 0 && `${cat.history.length + 1}世`}
          </Typography>
          <Typography variant="body2">
            ({cat.age} days, 状态：{getStatusLabel(cat.status)})
          </Typography>
        </Row>

        <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
          <DrawerIcon />
        </MenuButton>
      </Header>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea cat={cat} />

      {cat.status === CatStatus.finished ? (
        <FinishPage cat={cat} />
      ) : (
        <EventSection cat={cat} />
      )}

      <CatItemsArea cat={cat} />

      <IconButton onClick={() => history.push("/achievements")}>
        <EmojiEventsIcon />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const MenuButton = styled(IconButton)`
  align-self: flex-end;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
