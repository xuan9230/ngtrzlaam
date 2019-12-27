import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Message } from "./types";

const testQuery = `
query {
  feed {
    body
    time
  }
}
`;

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  async function fetchFeed(query: string, variables?: object) {
    const res: AxiosResponse = await axios.post("http://localhost:4000", {
      query,
      variables
    });
    const { data } = res.data;
    setMessages(data.feed);
  }

  useEffect(() => {
    fetchFeed(testQuery);
  }, []);

  if (!(messages && messages.length))
    return <div>No message. Spark your cat!</div>;

  return (
    <div>
      {messages.map(message => (
        <div>
          {message.body}, posted at {message.time}
        </div>
      ))}
    </div>
  );
};

export default App;
