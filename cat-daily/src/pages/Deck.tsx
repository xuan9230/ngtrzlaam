import React, { useState } from "react";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";

import SideDrawer from "../components/SideDrawer";
import EventCard from "../components/EventCard";

export default function Deck() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Container>
      <IconButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </IconButton>
      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
      <EventCard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
