import React, { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ theme }) => {
  const [burger, setBurger] = useState("burger_close"); // тут была опечатка borger → burger

  const toggleBurger = () => {
    setBurger("burger_open");
  };

  // Если нужно отдельно закрывать по крестику/ссылке — можно вынести в отдельную функцию
  const closeBurger = () => {
    setBurger("burger_close");
  };

  const handleScroll = (e, id) => {
    e.preventDefault(); // Отменяем стандартное поведение, если оно глючит
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      console.warn(`Элемент #${id} не найден!`);
    }

    closeBurger()
  };

  if (burger === "burger_close") {
    return (
      <div className={`${classes.navbar} ${classes[`${theme}`]}`}>
        <div className="container">
          <div className={classes.navbar__content}>
            <div className={classes.logo}>BEAUTY BY</div>

            {/* Кнопка бургера с событием */}
            <button
              type="button"
              className={classes.burger}
              aria-label="Открыть меню"
              onClick={toggleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={classes.navbar__links}>
              <a className={classes.navbar__link} onClick={(e) => handleScroll(e, 'main')} >главная</a>
              <a className={classes.navbar__link} onClick={(e) => handleScroll(e, 'reviews')} >отзывы</a>
              <a className={classes.navbar__link} onClick={(e) => handleScroll(e, 'works')} >работы</a>
              <a className={classes.navbar__link} onClick={(e) => handleScroll(e, 'prices')} >цены</a>
              <a className={classes.navbar__link} onClick={(e) => handleScroll(e, 'contacts')} >контакты</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  // Состояние burger_open — показываем полноэкранное меню
  return (
    <div className={`${classes.burger__menu} ${classes[`${theme}`]}`}>
      <div className={classes.container}>
        <div className={classes.navbar__content}>
          <div className={classes.menu_box}>
            <div className={classes.logo}>BEAUTY BY</div>

            {/* Кнопка закрытия (крестик) */}
            <button
              type="button"
              className={classes.burger_close}
              aria-label="Закрыть меню"
              onClick={closeBurger}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={classes.navbar__links_full}>
            <a className={classes.navbar__link_full} href="#reviews" onClick={(e) => handleScroll(e, 'main')}>
              главная
            </a>
            <a className={classes.navbar__link_full} href="#reviews" onClick={(e) => handleScroll(e, 'reviews')}>
              отзывы
            </a>
            <a className={classes.navbar__link_full} href="#works" onClick={(e) => handleScroll(e, 'works')}>
              работы
            </a>
            <a className={classes.navbar__link_full} href="#prices" onClick={(e) => handleScroll(e, 'prices')}>
              цены
            </a>
            <a className={classes.navbar__link_full} href="#contacts" onClick={(e) => handleScroll(e, 'contacts')}>
              контакты
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
