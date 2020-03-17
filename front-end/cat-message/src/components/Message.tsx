import React from "react";
import { Message as MessageType } from "../types";

export default function Message({ body, author }: MessageType) {
  return <div>{body}</div>;
}
