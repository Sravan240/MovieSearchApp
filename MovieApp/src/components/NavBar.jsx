import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-brands">
        <Link to="/">Movie App</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Favs" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
