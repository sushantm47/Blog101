import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="">
        <Link to="/" className="brand-logo left">
          Maths
        </Link>
        <SignedInLinks></SignedInLinks>
        <SignedOutLinks></SignedOutLinks>
      </div>
    </nav>
  );
};

export default Navbar;
