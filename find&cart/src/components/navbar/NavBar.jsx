import { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router";
import Theme from "../theme/Theme";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onListClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav>
      <div className="switch-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li onClick={onListClick}>
          <NavLink to="">Home </NavLink>
        </li>
        <li onClick={onListClick}>
          <NavLink to="/blog">Blog </NavLink>
        </li>
        <li onClick={onListClick}>
          <NavLink to="/about">About </NavLink>
        </li>
        <li onClick={onListClick}>
          <NavLink to="/contact">Contact </NavLink>
        </li>
        <li onClick={onListClick}>
          <Theme />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
