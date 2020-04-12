import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from "@material-ui/core/LinearProgress";

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

  if (loading) return <LinearProgress />;
  if (error || !data) return <p>Error :(</p>;

  return (
    <Container>
      <Title variant="h4">选择用户</Title>
      <List>
        {data.users.map(user => (
          <ListItem
            key={user.id}
            button
            onClick={() => {
              localStorage.setItem("user", JSON.stringify(user));
              history.push("/");
            }}
          >
            <StyledText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-top: 16px;
`;

const StyledText = styled(ListItemText)`
  text-align: center;
`;
