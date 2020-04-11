import React from "react";
import TinderCard from "react-tinder-card";
import { useHistory } from "react-router-dom";

export default function Deck() {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          history.push("/login");
        }}
      >
        Log out
      </button>
      {/* 
        // @ts-ignore */}
      <TinderCard onSwipe={() => {}} onCardLeftScreen={() => {}}>
        Test
      </TinderCard>
    </div>
  );
}
