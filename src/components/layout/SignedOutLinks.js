import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
