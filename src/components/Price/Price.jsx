import React, { useState } from 'react';
import classes from './Price.module.css';

// Данные (массивы для маникюра и педикюра)
const manikur = [
  { id: 1, title: 'Маникюр б/п', price: 1100, time: '1 ч' },
  { id: 2, title: 'Маникюр с покрытием гель-лак (Длинные ногти)', price: 1800, time: '2 ч' },
  { id: 3, title: 'Маникюр с покрытием гель-лак (Короткие ногти)', price: 1600, time: '2 ч' },
  { id: 4, title: 'Маникюр с покрытием гель-лак (Средние ногти)', price: 1700, time: '2 ч' },
  { id: 5, title: 'Наращивание ногтей (длина 1-2)', price: 1900, time: '2 ч' },
  { id: 6, title: 'Наращивание ногтей (длина 3-4)', price: 2000, time: '2.5 ч' },
  { id: 7, title: 'Наращивание ногтей (длина более 5)', price: 2100, time: '2.5 ч' },
  { id: 8, title: 'Холодная парафинотерапия', price: 600, time: '0.5 ч' },
  { id: 9, title: 'Японский маникюр', price: 1300, time: '0.5 ч' },
  { id: 10, title: 'Снятие/маникюр (без покрытия)', price: 1300, time: '1.5 ч' },
];

// Данные для педикюра (строго по твоему списку)
const pedicur = [
  { id: 1, title: 'Обработка стоп / педикюр с покрытием', price: 2100, time: '1 ч 50 м' },
  { id: 2, title: 'Обработка пальчиков / без покрытия', price: 1200, time: '1 ч 40 м' },
  { id: 3, title: 'Обработка стоп / пальчики (без покрытия)', price: 1500, time: '1 ч 30 м' },
  { id: 4, title: 'Педикюр с покрытием / без обработки стоп', price: 1900, time: '1 ч 50 м' },
  { id: 5, title: 'Обработка стоп / без пальчиков', price: 1100, time: '45 м' },
  { id: 6, title: 'Снятие покрытия / без последующего', price: 500, time: '1 ч' },
  { id: 7, title: 'Снятие / обработка пальчиков, стоп (без покрытия)', price: 1700, time: '1 ч 30 м' },
];

const Price = () => {
  // Стейт для активной категории ('manikur' или 'pedicur')
  const [activeTab, setActiveTab] = useState('manikur');
  const [key, setKey] = useState(0); // ключ для пересоздания списка

  // Выбираем данные в зависимости от активной кнопки
  const currentList = activeTab === 'manikur' ? manikur : pedicur;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setKey((prev) => prev + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button
          onClick={() => handleTabClick('manikur')}
          className={`${classes.button} ${activeTab === 'manikur' ? classes.buttonActive : classes.buttonInactive}`}
          aria-pressed={activeTab === 'manikur'}
        >
          маникюр
        </button>
        <button
          onClick={() => handleTabClick('pedicur')}
          className={`${classes.button} ${activeTab === 'pedicur' ? classes.buttonActive : classes.buttonInactive}`}
          aria-pressed={activeTab === 'pedicur'}
        >
          педикюр
        </button>
      </div>

      <ul key={key} className={classes.list}>
        {currentList.map((item) => (
          <li key={item.id} className={classes.list__item}>
            <p className={classes.title}>{item.title}</p>
            <div className={classes.description}>
              <p className={classes.price}>{item.price} ₽</p>
              <p className={classes.time}>{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Price;
