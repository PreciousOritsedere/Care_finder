"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "@/assets/nav/logo.svg";
import Hamburger from "@/assets/nav/hamburger.svg";
import Cancel from "@/assets/nav/cancel.svg";
import NavMenu from "@/Components/Nav_Menu/NavMenu";
import Link from "next/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.nav}>
    <Link
      <Image src={Logo} alt="Logo" />

      <div>
        <>
          {showMenu ? (
            <Image src={Cancel} alt="Menu" onClick={handleMenuToggle} />
          ) : (
            <Image
              src={Hamburger}
              alt="Menu"
              className={styles.hamburger}
              onClick={handleMenuToggle}
            />
          )}
        </>
      </div>

      <div className={styles.desktop_menu}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          {/* <li>Drugs</li> */}
          <li>Health</li>
          <li>Blog</li>
        </ul>
        <div className={styles.nav_signup}>
          <p>I have an health care </p>
          <button>Sign up</button>
        </div>
      </div>
     

      {showMenu ? <NavMenu /> : null}
    </nav>
  );
}

export default Navbar;