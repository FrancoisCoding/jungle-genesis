import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
