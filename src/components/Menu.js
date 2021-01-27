import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/people">People</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/planets">Planets</Link>
    </div>
  )
}

export default Menu;