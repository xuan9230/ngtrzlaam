import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CatList from "./pages/CatList";
import UserList from "./pages/UserList";
import Deck from "./pages/Deck";

export default function Router() {
  const user = localStorage.getItem("user");

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
          <Deck />
        </Route>
        {!!user ? <Redirect to="/cats" /> : <Redirect to="/login" />}
      </Switch>
    </BrowserRouter>
  );
}
