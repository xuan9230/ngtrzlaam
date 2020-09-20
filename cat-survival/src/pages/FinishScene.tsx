/**
 * Show the finish information for a cat if certain attribute > 100 or < 0
 */

import React from "react";
import Typography from "@material-ui/core/Typography";

import { Cat } from "../baseTypes";
import { CardsContainer } from "./EventSection";

export default function FinishScene({ cat }: { cat: Omit<Cat, "owner"> }) {
  function getFinishMessage(): string {
    if (cat.health > 100) return "猫子心宽体胖，不愿冒险了";
    if (cat.health < 0) return "猫生病了，不愿冒险了";
    if (cat.knowledge > 100)
      return "猫获得了太多奇怪的知识，觉醒了，决心争取Catstitutional Rights, 拒绝当你的宠物";
    if (cat.knowledge < 0) return "笨笨的猫咪并不清楚，这个冒险怎么继续玩下去";
    if (cat.wilderness > 100) return "野性十足的猫逃走了！";
    if (cat.wilderness < 0) return "温顺的猫咪只想蹭着你呼噜，不想冒险了";
    throw new Error("No attribute exceeds 100");
  }

  return (
    <CardsContainer>
      <Typography variant="body1" style={{ marginTop: 56 }}>
        {getFinishMessage()}
      </Typography>
    </CardsContainer>
  );
}
