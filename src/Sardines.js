import React from "react";
import { NavLink } from "react-router-dom";

function Sardines() {
  return (
    <>
    <NavLink exact to="/">
    Go back
  </NavLink>
    <div>
      sardines
    </div>
    </>
  );
}

export default Sardines;
