import styles from "./Header.module.css";
import logo from "../../../public/Logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Логотип" />
      </div>
      <nav className={styles.header__nav}>
        <a className={styles.header__link} href="#1">
          О нас
        </a>
        <a className={styles.header__link} href="#2">
          Возможности
        </a>
        <a className={styles.header__link} href="#3">
          Контакты
        </a>
        <a className={styles.header__link} href="#">
          Вход
        </a>
        <a className={styles.header__link} href="#">
          Регистрация
        </a>
        <a className={styles.header__link} href="#">
          Услуги и сервисы
        </a>
      </nav>
    </header>
  );
};

export default Header;
