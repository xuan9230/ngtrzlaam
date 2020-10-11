import React from "react";
import { ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Router from "./Router";
import apolloClient from "./apollo";
import { DeckProvider } from "./providers/DeckProvider";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#EAE7DC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <DeckProvider>
          <Grid>
            <Router />
          </Grid>
        </DeckProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
