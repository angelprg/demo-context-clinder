import React from "react";
import LikeCounter from './LikeCounter';

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          <LikeCounter />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
