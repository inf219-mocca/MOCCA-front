import * as React from "react";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/" className="navLink">
          Status
        </a>
        <a href="/history" className="navLink">
          History
        </a>
      </nav>
    </header>
  );
};

export default Nav;
