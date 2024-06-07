import img from "../../../public/image.png";
import styles from "./Main.module.css";
import img2 from "../../../public/Container.png";
import img3 from "../../../public/image2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../index.css";
import { Navigation } from "swiper/modules";

const Main = () => {
  return (
    <main>
      <h1 id="1" className={styles.main_title}>
        О нас
      </h1>
      <section className={styles.main_section}>
        <div className={styles.main_section_img}>
          <div className={styles.main_img_container}>
            <img
              className={styles.main_img}
              src={img}
              alt="Описание изображения"
            />
          </div>
        </div>
        <div className={styles.main_text_container}>
          <p id="2" className={styles.main_paragraph}>
            Сервис Единный Расчетный центр запущен для облегчения взаимодействия
            с поставщиками услуг ЖКХ. Теперь владельцам и жильцам
            многоквартирных и индивидуальных домов, многоэтажных и
            административных зданий не придется переживать о своевременном
            получении бумажной квитанции. Получайте все квитанции онлайн и
            оплачивайте их с помощью привязанного электронного кошелька, не
            тратя своё драгоценное время
          </p>
          <p className={styles.main_paragraph}>
            С помощью нашего сервиса и мобильного приложения вы можете решать
            вопросы обслуживания и управления услугами для вашей недвижимости
            онлайн, не посещая коммунальные организации.
          </p>
        </div>
      </section>
      <section className={styles.main_features}>
        <div className={styles.main_feature_container}>
          <span className={styles.main_feature_text}>
            Сервис для жильцов и владельцев недвижимости
          </span>
          <p className={styles.main_feature_paragraph}>
            Современный и удобный сервис который сделает проще ваше
            взаимодействие с коммунальными службами и ТСЖ!
          </p>
          <div className={styles.main_button_container}>
            <button className={styles.main_button}>СКАЧАТЬ ДЛЯ ANDROID</button>
            <button className={styles.main_button}>СКАЧАТЬ ДЛЯ IPHONE</button>
          </div>
        </div>
        <div className={styles.main_section_img2}>
          <img
            className={styles.main_img}
            src={img2}
            alt="Описание изображения"
          />
        </div>
      </section>
      <section className={styles.main_slideshow}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img2}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img2}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.main_slide_img_container}>
              <img
                className={styles.main_img}
                src={img2}
                alt="Описание изображения"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.main_contacts}>
        <h2 id="3" className={styles.main_contacts_title}>
          Контакты
        </h2>
        <div className={styles.main_contacts_wrapper}>
          <div className={styles.main_contacts_list}>
            <a className={styles.main_contacts_link} href="tel:+996775488388">
              +996 (775) 488 388
            </a>
            <a className={styles.main_contacts_link} href="tel:+996702488388">
              +996 (702) 488 388
            </a>
            <a className={styles.main_contacts_link} href="tel:+996775488388">
              +996 (775) 488 388
            </a>
            <a
              className={styles.main_contacts_email}
              href="mailto:support@mydom.kg"
            >
              support@mydom.kg
            </a>
          </div>
          <div className={styles.main_contacts_img}>
            <img
              className={styles.main_img}
              src={img3}
              alt="Описание изображения"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
