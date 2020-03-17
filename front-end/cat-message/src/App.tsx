import React, { useState, useEffect } from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Message from "./components/Message";
import environment from "./relay-environment";
import { RootProps } from "./types";

const testQuery = graphql`
  query AppQuery {
    messages {
      body
      author
      id
    }
  }
`;

const App: React.FC = () => {
  function render({
    error,
    props
  }: {
    error: Error | null;
    props: RootProps | unknown;
  }) {
    if (error) {
      return <div>Error!</div>;
    }
    if (!props) {
      return <div>Loading...</div>;
    }

    const { messages } = props as RootProps;
    return (
      <>
        {messages.map(m => (
          <Message {...m} />
        ))}
      </>
    );
  }

  return (
    <QueryRenderer
      environment={environment}
      query={testQuery}
      variables={{}}
      render={render}
    />
  );

  // const [messages, setMessages] = useState<Message[]>([]);

  // async function fetchFeed(query: string, variables?: object) {
  //   const res: AxiosResponse = await axios.post("http://localhost:4000", {
  //     query,
  //     variables
  //   });
  //   const { data } = res.data;
  //   setMessages(data.feed);
  // }

  // useEffect(() => {
  //   fetchFeed(testQuery);
  // }, []);

  // if (!(messages && messages.length))
  //   return <div>No message. Spark your cat!</div>;

  // return (
  //   <div>
  //     {messages.map(message => (
  //       <div>
  //         {message.body}, posted at {message.time}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default App;
