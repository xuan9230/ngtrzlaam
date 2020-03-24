import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";

import { Message } from "./types";

export default function MessageItem({
  message,
  onClick
}: {
  message: Message;
  onClick: Function;
}) {
  const data = useFragment(
    graphql`
      fragment MessageItem_message on Message {
        date
        body
      }
    `,
    message as any
  );

  return (
    <div>
      Date: {data.date}, Content: {data.body}
    </div>
  );
}
