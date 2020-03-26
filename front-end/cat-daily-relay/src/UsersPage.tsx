import React from "react";
import { preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";
import { useHistory } from "react-router-dom";

import environment from "./relay-environment";
import { User } from "./types";

const UsersQuery = graphql`
  query UsersPageQuery {
    Users {
      id
      name
    }
  }
`;

const preloadedQuery = preloadQuery(environment, UsersQuery, {
  /* query variables */
});

function UsersPage() {
  const history = useHistory();
  const { Users } = usePreloadedQuery(UsersQuery, preloadedQuery) as {
    Users: User[];
  };

  function setUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/");
  }

  return (
    <div>
      {Users.map(user => (
        <div key={user.id} onClick={() => setUser(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default UsersPage;
