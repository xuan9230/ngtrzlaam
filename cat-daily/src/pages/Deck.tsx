import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import IconButton from "@material-ui/core/IconButton";
import DrawerIcon from "@material-ui/icons/Menu";

import SideDrawer from "../components/SideDrawer";

export default function Deck() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <IconButton aria-label="menu" onClick={() => setShowDrawer(true)}>
        <DrawerIcon />
      </IconButton>
      <SideDrawer open={showDrawer} onClose={() => setShowDrawer(false)} />
      {/* 
        // @ts-ignore */}
      <TinderCard onSwipe={() => {}} onCardLeftScreen={() => {}}>
        Test
      </TinderCard>
    </div>
  );
}
