import { useEffect, useState } from "react";
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
        {/* Logo */}
        <div className={styles.logo}>
          {/* <Image
            src={logo}
            alt="Moon Lab Pilates Logo"
            width={50}
            height={50}
          /> */}
          LOGO
        </div>

        {/* Navbar Links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">Rólunk</a>
          </li>
          <li>
            <a href="#aboutPilates">Reformer Pilates</a>
          </li>
          <li>
            <a href="#classes">Áraink</a>
          </li>
          <li>
            <a href="#faq">GYIK</a>
          </li>
          <li>
            <a href="#contact">Kapcsolat</a>
          </li>
        </ul>

        {/* Language Chooser */}
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
