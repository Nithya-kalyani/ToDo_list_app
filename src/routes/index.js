import React from "react";
import { Router } from "@reach/router";
import route from "./route";
import PublicRoute from "./publicRouter";
import HomeParent from "../screens/home";
import DetailViewParent from "../screens/detailView";

const RouteApp = (props) => {
  return (
    <Router>
      <PublicRoute path={route.home} component={HomeParent} />
      <PublicRoute path={route.detail} component={DetailViewParent} />
    </Router>
  );
};

export default RouteApp;
