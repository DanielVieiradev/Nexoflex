import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/site.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > 10) {
        nav.classList.add(styles.scrolled);
      } else {
        nav.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-content"]}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Nexoflex" />
          </Link>
          <span className={styles.brandname}>Nexoflex™</span>
        </div>
        <div
          className={`${styles["menu-toggle"]} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MENU */}
        <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
          <li className={styles.item}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa" onClick={closeMenu}>Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projetos" onClick={closeMenu}>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato" onClick={closeMenu}>Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
