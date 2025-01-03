import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/NavBar.module.css"; // Importação de CSS Module

const NavBar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path); // Atualiza o link ativo
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <a className={activeLink === "/" ? styles.active : ""}>Home</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            href="/destinations"
            onClick={() => handleLinkClick("/destinations")}
          >
            <a className={activeLink === "/destinations" ? styles.active : ""}>
              Destinos
            </a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/blog" onClick={() => handleLinkClick("/blog")}>
            <a className={activeLink === "/blog" ? styles.active : ""}>Blog</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/about-us" onClick={() => handleLinkClick("/about-us")}>
            <a className={activeLink === "/about-us" ? styles.active : ""}>
              Sobre Nós
            </a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
            <a className={activeLink === "/contact" ? styles.active : ""}>
              Contato
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
