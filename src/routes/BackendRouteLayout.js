import MasterBackend from "../layout/backend/MasterBackend";
import React from "react";
import { Route } from "react-router-dom";
function BackendRouteLayout({ ...rest }) {
  return (
    <Route {...rest} render={(props) => <MasterBackend {...props} />}></Route>
  );
}

export default BackendRouteLayout;
