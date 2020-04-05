import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function UserList() {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Connie" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Stan" />
      </ListItem>
    </List>
  );
}
