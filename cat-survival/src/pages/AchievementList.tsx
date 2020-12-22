import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { LinearProgress } from "@material-ui/core";

import List from "../components/List";
import { useDeck } from "../providers/DeckProvider";
import { FinishType, GetCatQuery, GetCatQueryVariables } from "../API";
import { History } from "../baseTypes";

const CAT_HISTORIES_QUERY = gql`
  query getCat($id: ID!) {
    getCat(id: $id) {
      id
      history {
        type
        days
        scene
        attribute
      }
    }
  }
`;

export default function AchievementList() {
  const {
    state: { catId },
  } = useDeck();

  const [sceneName, setSceneName] = React.useState<string | null>(null);

  const { loading, error, data } = useQuery<GetCatQuery, GetCatQueryVariables>(
    CAT_HISTORIES_QUERY,
    {
      variables: {
        id: catId || "1",
      },
    }
  );

  const cat = data?.getCat;

  if (error || !cat?.history) return <p>Error fetching cat achievements</p>;
  if (loading) return <LinearProgress />;

  const scenes = cat.history.filter((his) => his.type === FinishType.scene);

  function renderScene() {
    return <div>{sceneName}</div>;
  }

  return (
    <Container>
      {sceneName && renderScene()}
      <List
        title="成就列表"
        // @ts-ignore
        records={scenes}
        primaryKey="scene"
        onClick={(scene: History) => setSceneName(scene.scene)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
