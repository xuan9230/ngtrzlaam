import React from "react";
import { useQuery, gql } from "@apollo/client";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

import { UserListQuery } from "../generated/graphql";

const USERS_QUERY = gql`
  query UserList {
    users {
      id
      name
    }
  }
`;

export default function UserList() {
  const { loading, error, data } = useQuery<UserListQuery>(USERS_QUERY);
  const history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {data.users.map((user) => (
        <ListItem
          key={user.id}
          button
          onClick={() => {
            localStorage.setItem("user", JSON.stringify(user));
            history.push("/");
          }}
        >
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
}
