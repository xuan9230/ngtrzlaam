import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

const USERS_QUERY = gql`
  query UserList {
    users {
      id
      name
    }
  }
`;

type User = {
  id: string;
  name: string;
};

export default function UserList() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {data.users.map((user: User) => (
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
