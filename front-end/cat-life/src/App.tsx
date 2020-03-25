import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import environment from "./relay-environment";
import UsersPage from "./UsersPage";
import CatPage from "./CatPage";

function App() {
  const user = localStorage.getItem("user");
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        {!!user ? (
          <Route exact path="/">
            <CatPage />
          </Route>
        ) : (
          <Redirect to="/users" />
        )}
      </Switch>
    </Router>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
