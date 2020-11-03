import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import RemindersIndexPage from "./RemindersIndexPage";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/reminders" component={RemindersIndexPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
