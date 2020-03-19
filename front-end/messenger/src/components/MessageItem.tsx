import React from "react";
import { Message } from "../types";

export default function MessageItem({ body, author }: Message) {
  return (
    <div>
      Author: {author}, Content: {body}
    </div>
  );
}
