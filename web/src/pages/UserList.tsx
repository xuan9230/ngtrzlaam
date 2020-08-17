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

  if (loading) return <LinearProgress />;
  if (error || !(data && data.listUsers && data.listUsers.items))
    return <p>Failed to fetch users :(</p>;

  console.log(data.listUsers.items);
  return (
    <List
      title="选择用户"
      // @ts-ignore
      records={data.listUsers.items}
      primaryKey="name"
      onClick={(user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/cats");
      }}
    />
  );
}
