import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import PetsIcon from "@material-ui/icons/Pets";
import HistoryIcon from "@material-ui/icons/Timeline";

type DrawerProps = {
  open: boolean;
  onClose: Function;
};

export default function SideDrawer({ open, onClose }: DrawerProps) {
  const history = useHistory();

  return (
    <Drawer anchor="left" open={open} onClose={(event, reason) => onClose()}>
      <Title>猫的日常</Title>
      <List>
        <ListItem button>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="猫咪列表" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="际遇记录" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            localStorage.removeItem("user");
            history.push("/login");
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="切换用户" />
        </ListItem>
      </List>
    </Drawer>
  );
}

const Title = styled(Typography)`
  margin-top: 16px;
  margin-left: 16px;
`;
