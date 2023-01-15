import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

import FrontendRoutes from "../../routes/list/FrontendRoutes";
import NavFrontend from "./components/NavFrontend";
import React from "react";

const MasterFrontend = () => {
  return (
    <div>
      <NavFrontend />
      <Switch>
        {FrontendRoutes.map((route, index) => {
          return (
            route.component && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              ></Route>
            )
          );
        })}
      </Switch>
    </div>
  );
};

export default MasterFrontend;
