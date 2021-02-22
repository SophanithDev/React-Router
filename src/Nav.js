import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const styles = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link style={styles} to="/">
        <h3>LOGO</h3>
      </Link>
      <ul className="nav-link">
        <Link style={styles} to="/about">
          <li>About</li>
        </Link>
        <Link style={styles} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
