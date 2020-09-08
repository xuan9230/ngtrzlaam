import React from "react";
import styled from "styled-components";

export default function VerticalProgressBar({
  progress,
  backgroundColor,
}: {
  progress: number;
  backgroundColor: string;
}) {
  return (
    <Progress>
      <ProgressBar style={{ height: `${progress}%`, backgroundColor }} />
    </Progress>
  );
}

const Progress = styled.div`
  height: 120px;
  width: 40px;
  background: #dfe6e9;
  position: relative;
  border-radius: 0.3em;
`;

const ProgressBar = styled.div`
  transition: height 0.5s;
  border-radius: 0.3em;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: white;
  font-weight: bold;
`;
