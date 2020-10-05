import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Play from "./pages/Play";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[500],
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/youtube">
              <Home />
            </Route>
            <Route path="/youtube/play">
              <Play />
            </Route>
            {/* <Route exact path="*">
              <Home />
            </Route> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
