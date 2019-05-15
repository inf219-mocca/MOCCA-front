import * as React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="navLink">
          Status
        </Link>
        <Link to="/history" className="navLink">
          History
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
