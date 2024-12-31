import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path); // Atualiza o link ativo
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={activeLink === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/destinos"
            onClick={() => handleLinkClick("/destinos")}
            className={activeLink === "/destinos" ? "active" : ""}
          >
            Destinos
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/blog"
            onClick={() => handleLinkClick("/blog")}
            className={activeLink === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/sobre-nos"
            onClick={() => handleLinkClick("/sobre-nos")}
            className={activeLink === "/sobre-nos" ? "active" : ""}
          >
            Sobre Nós
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contato"
            onClick={() => handleLinkClick("/contato")}
            className={activeLink === "/contato" ? "active" : ""}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
