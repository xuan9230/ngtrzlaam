import React from "react";
import { ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Router from "./Router";
import { apolloClient } from "./apollo";
import { DeckProvider } from "./providers/DeckProvider";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <DeckProvider>
          <Router />
        </DeckProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
