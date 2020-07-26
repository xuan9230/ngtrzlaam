import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CatList from "./pages/CatList";
import UserList from "./pages/UserList";
import Deck from "./pages/Deck";
import { useDeck } from "./providers/DeckProvider";

export default function Router() {
  const user = localStorage.getItem("user");
  const {
    state: { cat },
  } = useDeck();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <UserList />
        </Route>
        <Route path="/cats">
          <CatList />
        </Route>
        <Route path="/deck">
          {!!cat ? <Deck cat={cat} /> : <Redirect to="/cats" />}
        </Route>
        {!!user ? <Redirect to="/cats" /> : <Redirect to="/login" />}
      </Switch>
    </BrowserRouter>
  );
}
