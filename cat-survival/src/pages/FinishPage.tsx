/**
 * Show the finish information for a cat if certain attribute > 100 or < 0
 */

import React from "react";
import { omit } from "lodash-es";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

import { Cat, History } from "../baseTypes";
import { CardsContainer } from "./EventSection";
import { CatAttribute, CatStatus, FinishType } from "../API";
import { CardImage } from "../components/EventCard";
import { useDeck } from "../providers/DeckProvider";
import sceneDefinitionMap from "../constants/sceneDefinitionMap";

const UPDATE_CAT = gql`
  mutation updateCat($input: UpdateCatInput!) {
    updateCat(input: $input) {
      id
      name
      age
      health
      knowledge
      wilderness
      status
      eventIDs
      itemNames
      history {
        type
        days
        sceneId
        attribute
      }
    }
  }
`;

export default function FinishPage({ cat }: { cat: Cat }) {
  const {
    state: { sceneId },
  } = useDeck();

  const scene = sceneId ? sceneDefinitionMap[sceneId] : null;

  console.log(sceneId, scene);

  const [updateCat] = useMutation(UPDATE_CAT);
  const history = useHistory();

  const { finishMessage, newHistory } = React.useMemo(() => {
    const newHistory: History = {
      days: cat.age,
      type: FinishType.scene, // will be changed below if non-scene
      attribute: null,
      sceneId: sceneId || null,
    };

    function getFinishMessage(): string | null {
      if (scene) return scene.description;

      if (cat.health > 100) {
        newHistory.type = FinishType.attributeHigh;
        newHistory.attribute = CatAttribute.health;
        return "猫子心宽体胖，不愿冒险了";
      }
      if (cat.health < 0) {
        newHistory.type = FinishType.attributeLow;
        newHistory.attribute = CatAttribute.health;
        return "猫生病了，不能冒险了";
      }
      if (cat.knowledge > 100) {
        newHistory.type = FinishType.attributeHigh;
        newHistory.attribute = CatAttribute.knowledge;
        return "猫获得了太多奇怪的知识，觉醒了，决心争取Catstitutional Rights, 拒绝当你的宠物";
      }

      if (cat.knowledge < 0) {
        newHistory.type = FinishType.attributeLow;
        newHistory.attribute = CatAttribute.knowledge;
        return "笨笨的猫咪并不清楚，这个冒险怎么继续玩下去";
      }
      if (cat.wilderness > 100) {
        newHistory.type = FinishType.attributeHigh;
        newHistory.attribute = CatAttribute.wilderness;
        return "野性十足的猫逃走了！";
      }
      if (cat.wilderness < 0) {
        newHistory.type = FinishType.attributeLow;
        newHistory.attribute = CatAttribute.wilderness;
        return "温顺的猫咪只想靠着你呼噜，不想冒险了";
      }

      return null;
    }

    const finishMessage = getFinishMessage();

    return {
      finishMessage,
      newHistory,
    };
  }, [cat, sceneId, scene]);

  async function handleReincarnateCat() {
    const updatedHistory = cat.history.map((h) => omit(h, "__typename"));
    updatedHistory.push(newHistory);

    await updateCat({
      variables: {
        input: {
          id: cat.id,
          health: 50,
          wilderness: 50,
          knowledge: 50,
          age: 0,
          status: CatStatus.inHouse,
          eventIDs: [],
          itemNames: [],
          history: updatedHistory,
        },
      },
    });
    history.push("/cats");
  }

  return (
    <Container>
      <CardImage
        image={
          scene
            ? scene.imgUrl
            : "https://cat-daily-event-images.s3-ap-southeast-2.amazonaws.com/finishScene.jpg"
        }
      />
      {scene && (
        <div style={{ marginTop: 16 }}>
          <Typography variant="body1">{scene.name}</Typography>
        </div>
      )}
      <div style={{ margin: 16 }}>
        {finishMessage && (
          <Typography variant="body1">{finishMessage}</Typography>
        )}
      </div>

      <Button variant="contained" onClick={handleReincarnateCat}>
        再来过
      </Button>
    </Container>
  );
}

const Container = styled(CardsContainer)`
  flex-direction: column;
  align-items: center;
`;
