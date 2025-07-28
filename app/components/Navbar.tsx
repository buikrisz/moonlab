import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/moon_studio_website_logo_brown.svg";
import styles from "../styles/Navbar.module.css";
import { motibroLink } from "../data";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : ""}`}>
      <div
        className={`${styles.leftNavOverlay} ${menuOpen ? styles.open : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          {IoMdClose({})}
        </button>
        <ul>
          <li>
            <a href="#pilates" onClick={handleCloseMenu}>
              Pilatesről
            </a>
          </li>
          <li>
            <a href="#oktatok" onClick={handleCloseMenu}>
              Oktatók
            </a>
          </li>
          <li>
            <a href="#oratipusok" onClick={handleCloseMenu}>
              Órák
            </a>
          </li>
          <li>
            <a href="#arak" onClick={handleCloseMenu}>
              Áraink
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleCloseMenu}>
              GYIK
            </a>
          </li>
          <li>
            <a href="#kapcsolat" onClick={handleCloseMenu}>
              Kapcsolat
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.navbarContent}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          {IoMdMenu({})}
        </button>

        <div className={styles.logo}>
          <Image src={logo} alt="Moon Lab Pilates Logo" width={100} />
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#pilates">Pilatesről</a>
          </li>
          <li>
            <a href="#oktatok">Oktatók</a>
          </li>
          <li>
            <a href="#oratipusok">Órák</a>
          </li>
          <li>
            <a href="#arak">Áraink</a>
          </li>
          <li>
            <a href="#faq">GYIK</a>
          </li>
          <li>
            <a href="#kapcsolat">Kapcsolat</a>
          </li>
        </ul>

        <a
          className={styles.scheduleLink}
          href={motibroLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Órarend
        </a>
      </div>
    </nav>
  );
};
