"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { rightNav, shortLinks, topNav } from "@/constants/constants";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {/* Top banner */}
      <div>
        <img
          src="/images/Biztrade web header.png"
          alt="Biztrade web header"
          className={styles.headerImg}
        />
      </div>

      {/* Top Nav */}
      <div className={styles.topNav}>
        <ul>
          {topNav.map((item) => (
            <li key={item.id}>
              <a className={styles.navLink} href={item.url}>
                <div className={styles.flex}>
                  {item.img && <img src={item.img} alt={item.label} />}
                  {item.label}
                </div>
              </a>
              {item.subNav?.length > 0 && (
                <div className={styles.dropdown}>
                  <ul>
                    {item.subNav.map((subItem, index) => (
                      <li key={index}>
                        <a className={styles.navLink} href={subItem.url}>
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.hamburgerMenu}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={143.86}
                height={32.27}
              />
            </Link>
          </div>

          <button className={styles.hamburger} onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <Image
                src="/images/btn-close.svg"
                alt=""
                width={20}
                height={20}
              />
            ) : (
              <Image src="/images/menu.svg" alt="" width={20} height={20} />
            )}
          </button>
        </div>

        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navActive : ""
          }`}
        >
          <div className={styles.subTopNav}>
            <a href="#" className={styles.active}>
              Products
            </a>
            <a href="#">Category</a>
            <a href="#">Events</a>
          </div>

          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search for product category or service"
            />
            <button>Search</button>
          </div>

          <div className={styles.shortLinks}>
            {shortLinks.map((item) => (
              <a href={item.url} key={item.id}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div
          className={`${styles.rightNav} ${
            isMobileMenuOpen ? styles.navActive : ""
          }`}
        >
          {rightNav.map((item) => (
            <a href={item.url} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
