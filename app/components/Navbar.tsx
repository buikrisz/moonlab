import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/moon_studio_website_logo_brown.svg";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.navbarContent}>
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

        <div className={styles.languageChooser}>
          <select>
            <option value="hu">HU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
