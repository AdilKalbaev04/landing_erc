import logo from "../../../public/Logo.svg";
import logo2 from "../../../public/Link_margin.png";
import logo3 from "../../../public/Link.png";
import styles from "./Footer.module.css";
import beeline from "../../../public/beeline.svg.svg";
import oshka from "../../../public/okg.png.svg";
import mega from "../../../public/megacom.png.svg";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_img_container}>
        <img className={styles.footer_img} src={logo} alt="Логотип" />
      </div>
      <div className={styles.footer_download}>
        <span className={styles.footer_text}>
          Скачивайте мобильное приложение:
        </span>
        <div className={styles.footer_logo_container}>
          <img src={logo2} alt="Ссылка на приложение 1" />
          <img src={logo3} alt="Ссылка на приложение 2" />
        </div>
      </div>
      <div className={styles.footer_info}>
        <a className={styles.footer_link} href="">
          О нас
        </a>
        <a className={styles.footer_link} href="">
          Услуги и сервисы
        </a>
        <a className={styles.footer_link} href="">
          Для домкомов
        </a>
      </div>
      <div className={styles.footer_contacts}>
        <div className={styles.footer_tel_wrap}>
          <img src={beeline} alt="Beeline" />
          <a className={styles.footer_tel} href="tel:+996775488388">
            +996 (775) 488 388
          </a>
        </div>
        <div className={styles.footer_tel_wrap}>
          <img src={oshka} alt="Oshka" />
          <a className={styles.footer_tel} href="tel:+996702488388">
            +996 (702) 488 388
          </a>
        </div>
        <div className={styles.footer_tel_wrap}>
          <img src={mega} alt="Megacom" />
          <a className={styles.footer_tel} href="tel:+996997488388">
            +996 (997) 488 388
          </a>
        </div>
        <div className={styles.footer_tel_wrap}>
          <a className={styles.footer_tel} href="mailto:support@erc.kg">
            support@erc.kg
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
