import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/people">People</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/planets">Planets</Link>
    </>
  )
}

export default Menu;