import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <h3 className="logo">MixMaster</h3>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/newsletter">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
