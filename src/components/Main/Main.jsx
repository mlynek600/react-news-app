import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage";
import HelpPage from "./HelpPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/help">
        <HelpPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
