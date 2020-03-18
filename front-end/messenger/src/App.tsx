import React from "react";
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
};

export default App;
