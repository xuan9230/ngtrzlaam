import React from "react";
import styled from "styled-components";

export default function VerticalProgressBar({
  progress,
}: {
  progress: number;
}) {
  let isFinished = false;

  let _progress = progress;
  if (_progress > 100) {
    _progress = 100;
    isFinished = true;
  } else if (_progress < 0) {
    _progress = 0;
    isFinished = true;
  }

  const background = isFinished
    ? `repeating-linear-gradient(
      45deg,
      rgba(244,67,54, 0.75),
      rgba(244,67,54, 0.75) 5px,
      rgba(244,67,54, 0.5) 5px,
      rgba(244,67,54, 0.5) 10px
    )`
    : `repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.75) 5px,
    rgba(0, 0, 0, 0.5) 5px,
    rgba(0, 0, 0, 0.5) 10px
  )`;

  return (
    <Progress>
      <ProgressBar style={{ height: `${progress}%`, background }} />
    </Progress>
  );
}

const Progress = styled.div`
  height: 120px;
  width: 40px;
  background: #dfe6e9;
  position: relative;
  border-radius: 0.2em;
`;

const ProgressBar = styled.div`
  transition: height 0.5s;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: white;
  font-weight: bold;
`;
