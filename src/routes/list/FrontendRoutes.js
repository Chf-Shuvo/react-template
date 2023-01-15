import About from "../../views/frontend/About";
import Home from "../../views/frontend/Home";
import Policy from "../../views/frontend/Policy";

const FrontendRoutes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  { path: "/policy", exact: true, name: "Policy", component: Policy },
];

export default FrontendRoutes;
