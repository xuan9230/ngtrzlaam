import React from "react";
import styled from "styled-components";

export default function VerticalProgressBar({
  progress,
  color, // hex color string
}: {
  progress: number;
  color: string;
}) {
  const background = React.useMemo(() => {
    let isFinished = false;

    let _progress = progress;
    if (_progress > 100) {
      _progress = 100;
      isFinished = true;
    } else if (_progress < 0) {
      _progress = 0;
      isFinished = true;
    }

    return isFinished ? `rgba(0, 0, 0, 0.5)` : color;
  }, [color, progress]);

  return (
    <Progress>
      <ProgressBar style={{ height: `${progress}%`, background }} />
    </Progress>
  );
}

const Progress = styled.div`
  height: 120px;
  width: 40px;
  background: #e0dccc;
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
