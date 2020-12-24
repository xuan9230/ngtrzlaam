import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { LinearProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

import List from "../components/List";
import { useDeck } from "../providers/DeckProvider";
import { FinishType, GetCatQuery, GetCatQueryVariables } from "../API";
import { SceneDefinition } from "../baseTypes";
import sceneDefinitionMap from "../constants/sceneDefinitionMap";
import { CardImage } from "../components/EventCard";

const CAT_HISTORIES_QUERY = gql`
  query getCat($id: ID!) {
    getCat(id: $id) {
      id
      history {
        type
        days
        sceneId
        attribute
      }
    }
  }
`;

export default function AchievementList() {
  const {
    state: { catId },
  } = useDeck();
  const history = useHistory();

  const { loading, error, data } = useQuery<GetCatQuery, GetCatQueryVariables>(
    CAT_HISTORIES_QUERY,
    {
      variables: {
        id: catId || "1",
      },
    }
  );

  const cat = data?.getCat;

  const scenes = React.useMemo(() => {
    if (!cat) return [];

    let sceneIds: string[] = cat.history
      .filter((his) => his.type === FinishType.scene)
      .map((h) => h.sceneId!);

    // @ts-ignore
    sceneIds = [...new Set(sceneIds)];

    return sceneIds.map((sid) => sceneDefinitionMap[sid]);
  }, [cat]);

  if (error) return <p>Error fetching cat achievements</p>;
  if (loading || !cat?.history) return <LinearProgress />;

  function renderScene(scene: SceneDefinition) {
    return (
      <Container key={scene.id}>
        <Typography variant="h6">{scene.name}</Typography>
        <CardImage image={scene.imgUrl} style={{ margin: 8 }} />
        <Typography variant="body1">{scene.description}</Typography>
        <Divider style={{ width: "100%", margin: 16 }} />
      </Container>
    );
  }

  return (
    <Container>
      <List
        title="成就列表"
        // @ts-ignore
        records={scenes}
        primaryKey="name"
        renderItem={renderScene}
      />
      <IconButton onClick={() => history.push("/deck")}>
        <CancelIcon />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
