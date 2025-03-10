import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/JackS-Portfolio/#about">About</a>
          </li>
          <li>
            <a href="/JackS-Portfolio/#experience">Experience</a>
          </li>
          <li>
            <a href="/JackS-Portfolio/game">Game</a>
          </li>
          <li>
            <a href="/JackS-Portfolio/#contact">Contact</a>
          </li>
          <li>
          <a href="/JackS-Portfolio/game"rel="noopener noreferrer">Game</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
