import { Redirect, Route, Switch } from "react-router-dom";

import BackendRoutes from "../../routes/list/BackendRoutes";
import NavBackend from "./components/NavBackend";
import React from "react";

const MasterBackend = () => {
  return (
    <div>
      <NavBackend />
      <Switch>
        {BackendRoutes.map((route, index) => {
          return (
            route.component && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
    </div>
  );
};

export default MasterBackend;
