import React, { useState } from "react";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";

import SideDrawer from "../components/SideDrawer";
import EventCard from "../components/EventCard";

const sampleEvent = {
  id: "e_1",
  imgUrl: "https://img.gmz88.com/uploadimg/ico/2019/1108/1573177142153102.jpg",
  content:
    " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  effects: [],
};

export default function Deck() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Container>
      <IconButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </IconButton>
      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
      <EventCard event={sampleEvent} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
