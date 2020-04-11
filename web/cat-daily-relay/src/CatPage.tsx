import React from "react";
import styled from "styled-components";
import { graphql } from "babel-plugin-relay/macro";
import { preloadQuery, usePreloadedQuery } from "react-relay/hooks";

import environment from "./relay-environment";
import CatComponent from "./CatComponent";
import { Cat } from "./types";

const CatsQuery = graphql`
  query CatPageQuery($ownerId: ID!) {
    Cats(ownerId: $ownerId) {
      name
      ...CatComponent_cat
    }
  }
`;

function CatPage() {
  const user = JSON.parse(localStorage.getItem("user")!);

  const { Cats } = usePreloadedQuery(
    CatsQuery,
    preloadQuery(environment, CatsQuery, { ownerId: user.id })
  ) as { Cats: Cat[] };

  return (
    <Container>
      Cat page
      <div>Left drawer</div>
      <CatComponent cat={Cats[0]} />
    </Container>
  );
}

export default CatPage;

const Container = styled.div``;
