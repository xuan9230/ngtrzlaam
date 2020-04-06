import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Deck from "./pages/Deck";
import UserList from "./components/UserList";

export default function Router() {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <UserList />
        </Route>
        {!!user ? (
          <Route exact path="/">
            <Deck />
          </Route>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
}
