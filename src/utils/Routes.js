import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "../components/AboutPage/AboutPage";
import LandingPage from "../components/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Routes;
