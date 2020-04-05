import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Deck from "./Deck";

export default function UserList() {
  const [selectedUser, setSelectedUser] = useState<null | any>(null);

  if (selectedUser) return <Deck />;

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button onClick={() => setSelectedUser("Connie")}>
        <ListItemText primary="Connie" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Stan" />
      </ListItem>
    </List>
  );
}
