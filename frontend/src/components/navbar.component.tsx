import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">shoplista</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/recipes" className="nav-link">Recipes</Link>
        </li>
        <li className="navbar-item">
        <Link to="/shopping" className="nav-link">Shopping Lists</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};
