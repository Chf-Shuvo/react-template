import { BrowserRouter as Router, Switch } from "react-router-dom";

import BackendRouteLayout from "./routes/BackendRouteLayout";
import FrontendRouteLayout from "./routes/FrontendRouteLayout";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <BackendRouteLayout path={"/admin"} name={"Admin"} />
          <FrontendRouteLayout path={"/"} name={"Home"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
