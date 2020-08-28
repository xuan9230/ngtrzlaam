import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import LinearProgress from "@material-ui/core/LinearProgress";

import List from "../components/List";
import { ListUsersQuery } from "../API";
import { User } from "../generated/graphql";

const USERS_QUERY = gql`
  query listUsers {
    listUsers {
      items {
        id
        name
      }
    }
  }
`;

export default function UserList() {
  const { loading, error, data } = useQuery<ListUsersQuery>(USERS_QUERY);
  const history = useHistory();

  const users = data?.listUsers?.items;

  if (loading) return <LinearProgress />;
  if (error || !users) return <p>Failed to fetch users :(</p>;

  return (
    <List
      title="选择人类"
      // @ts-ignore
      records={users}
      primaryKey="name"
      onClick={(user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/cats");
      }}
    />
  );
}
