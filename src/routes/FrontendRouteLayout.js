import MasterFrontend from "../layout/frontend/MasterFrontend";
import React from "react";
import { Route } from "react-router-dom";
function FrontendRouteLayout({ ...rest }) {
  return (
    <Route {...rest} render={(props) => <MasterFrontend {...props} />}></Route>
  );
}

export default FrontendRouteLayout;
