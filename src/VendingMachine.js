import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import { NavLink } from "react-router-dom";

function VendingMachine() {
  return (
    <nav className="NavBar">
    <NavLink exact to="/soda">
      Soda
    </NavLink>
    <NavLink exact to="/chips">
      chips
    </NavLink>
    <NavLink exact to="/sardines">
      sardines
    </NavLink>
    </nav>
   
  );
}

export default VendingMachine;
