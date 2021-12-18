import React from "react";
import LikeCounter from './LikeCounter';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <LikeCounter />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
