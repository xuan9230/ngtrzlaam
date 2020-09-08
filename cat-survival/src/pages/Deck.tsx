import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";
import { LinearProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import CatAttributesArea from "./CatAttributesArea";
import SideDrawer from "../components/SideDrawer";

import EventSection from "./EventSection";
import { CatStatus, GetCatQuery, GetCatQueryVariables } from "../API";
import FinishScene from "./FinishScene";
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
    }
  }
`;

export default function Deck({ catId }: { catId: string }) {
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

  const cat = data?.getCat;

  if (error) return <p>Error fetching cat:(</p>;
  if (!(data && cat) || loading) return <LinearProgress />;

  return (
    <Container>
      <Header>
        <Row>
          <Typography variant="h6" style={{ marginRight: 8 }}>
            {cat.name}
          </Typography>
          <Typography variant="body2">({cat.age} days)</Typography>
        </Row>

        <MenuButton aria-label="menu" onClick={() => setShowDrawer(true)}>
          <DrawerIcon />
        </MenuButton>
      </Header>

      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />

      <CatAttributesArea style={{ margin: 16 }} cat={cat} />

      {cat.status === CatStatus.finished ? (
        <FinishScene cat={cat} />
      ) : (
        <EventSection cat={cat} />
      )}
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
