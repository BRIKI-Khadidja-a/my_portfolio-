//La barre de navigation en haut.


import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

function Navbar() {
  const width = useWindowWidth();
  return width < 800 ? <MobileNavbar /> : <DesktopNavbar />;
}

export default Navbar;
