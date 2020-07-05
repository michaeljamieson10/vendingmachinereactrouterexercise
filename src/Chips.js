import React from "react";
import { NavLink } from "react-router-dom";

function Chips() {
  return (
    <>
    <NavLink exact to="/">
    Go back
  </NavLink>
    <div>
      potato chips
    </div>
    </>
  );
}

export default Chips;
