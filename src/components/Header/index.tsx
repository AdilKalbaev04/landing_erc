import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <nav className={`${styles.header__nav} ${menuOpen ? styles.open : ""}`}>
        <a className={styles.header__link} href="#1">
          О нас
        </a>
        <a className={styles.header__link} href="#2">
          Возможности
        </a>
        <a className={styles.header__link} href="#3">
          Контакты
        </a>
        <a className={styles.header__link} href="/login">
          Вход
        </a>
        <a className={styles.header__link} href="register">
          Регистрация
        </a>
        <a className={styles.header__link} href="#">
          Услуги и сервисы
        </a>
      </nav>
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
