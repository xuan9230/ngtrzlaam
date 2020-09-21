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
import { CatAttribute, CatStatus } from "../API";

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
        days
        reason
        isMaxedOut
      }
    }
  }
`;

export default function FinishScene({ cat }: { cat: Cat }) {
  const [updateCat] = useMutation(UPDATE_CAT);
  const history = useHistory();

  const { finishMessage, newHistory } = React.useMemo(() => {
    const newHistory: History = {
      days: cat.age,
      reason: CatAttribute.health,
      isMaxedOut: true,
    };

    function getFinishMessage(): string {
      if (cat.health > 100) {
        newHistory.reason = CatAttribute.health;
        newHistory.isMaxedOut = true;
        return "猫子心宽体胖，不愿冒险了";
      }
      if (cat.health < 0) {
        newHistory.reason = CatAttribute.health;
        newHistory.isMaxedOut = false;
        return "猫生病了，不能冒险了";
      }
      if (cat.knowledge > 100) {
        newHistory.reason = CatAttribute.knowledge;
        newHistory.isMaxedOut = true;
        return "猫获得了太多奇怪的知识，觉醒了，决心争取Catstitutional Rights, 拒绝当你的宠物";
      }

      if (cat.knowledge < 0) {
        newHistory.reason = CatAttribute.knowledge;
        newHistory.isMaxedOut = false;
        return "笨笨的猫咪并不清楚，这个冒险怎么继续玩下去";
      }
      if (cat.wilderness > 100) {
        newHistory.reason = CatAttribute.wilderness;
        newHistory.isMaxedOut = true;
        return "野性十足的猫逃走了！";
      }
      if (cat.wilderness < 0) {
        newHistory.reason = CatAttribute.wilderness;
        newHistory.isMaxedOut = false;
        return "温顺的猫咪只想靠着你呼噜，不想冒险了";
      }
      throw new Error("No attribute exceeds 100");
    }

    const finishMessage = getFinishMessage();

    return {
      finishMessage,
      newHistory,
    };
  }, [cat]);

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
      <Typography variant="body1">{finishMessage}</Typography>
      <Button
        variant="contained"
        style={{ marginTop: 32 }}
        onClick={handleReincarnateCat}
      >
        再来过
      </Button>
    </Container>
  );
}

const Container = styled(CardsContainer)`
  flex-direction: column;
  align-items: center;
`;
