import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import LinearProgress from "@material-ui/core/LinearProgress";

import List from "../components/List";
import { User, GetUsersQuery } from "../generated/graphql";

const USERS_QUERY = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`;

export default function UserList() {
  const { loading, error, data } = useQuery<GetUsersQuery>(USERS_QUERY);
  const history = useHistory();

  if (loading) return <LinearProgress />;
  if (error || !data) return <p>Error :(</p>;

  return (
    <List
      title="选择用户"
      records={data.users}
      primaryKey="name"
      onClick={(user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/cats");
      }}
    />
  );
}
