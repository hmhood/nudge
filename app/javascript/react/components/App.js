import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import MedicationIndexPage from "./MedicationsIndexPage";
import NewReminderForm from "./NewReminderForm";
import RemindersIndexPage from "./RemindersIndexPage";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/reminders" component={RemindersIndexPage} />
        <Route exact path="/reminders/new" component={NewReminderForm} />
        <Route exact path="/medications" component={MedicationIndexPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
