import { Link } from "react-router-dom";
import React from "react";
function NavFrontend() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Front End Nav
        </Link>
        <Link className="navbar-brand float-end" to="/about">
          About
        </Link>
        <Link className="navbar-brand float-end" to="/policy">
          Policy
        </Link>
      </div>
    </nav>
  );
}

export default NavFrontend;
