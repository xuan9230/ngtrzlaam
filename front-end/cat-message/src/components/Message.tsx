import React from "react";
import { Message as MessageType } from "../types";

export default function Message({ body, time }: MessageType) {
  return <div>{body}</div>;
}
