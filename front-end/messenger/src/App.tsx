import React, { Suspense } from "react";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";

import MessageItem from "./components/MessageItem";
import environment from "./relay-environment";
import { Message } from "./types";

const TestQuery = graphql`
  query AppQuery {
    Messages {
      id
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(environment, TestQuery, {
  /* query variables */
});

function App({ preloadedQuery }: any) {
  const data = usePreloadedQuery(TestQuery, preloadedQuery);

  console.log(data);
  return (
    <div>
      {(data as { Messages: Message[] }).Messages.map(msg => (
        <MessageItem {...msg} />
      ))}
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
