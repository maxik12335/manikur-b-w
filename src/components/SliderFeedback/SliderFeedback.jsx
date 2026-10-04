// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import classes from './SliderFeedback.module.css'
import { useState } from 'react';

const SliderFeedback = () => {
  const [swiper, setSwiper] = useState(null);
  const [feedback, setFeedback] = useState([
    "Настоящий мастер своего дела. Просто прекрасно. Я уже давно хожу к Татьяне и она всегда делает все очень аккуратно и ответственно подходит к работе!",
    "Все великолепно! к Тане хожу давно и могу точно сказать, она королева в своем деле. Аккуратно, быстро и при этом качественно я всегда довольна результатом!",
    "Супер-быстро Исправила ошибки предыдущего мастера. Все очень понравилось Встретила, предложила попить, перекусить. Кабинет чистый, все аккуратно. Цена низкая, но качество очень хорошее",
    "Замечательный внимательный мастер и вежливая девушка. Все сделано идеально. Татьяна учла абсолютно все мои пожелания. Обязательно вернусь еще",
    "ноготочки супер, работа аккуратная, очень вежливая и приятная девушка, предоставила напиток и вкусняшки, + приятный новогодний подарочек, всем советую !",
  ])

  return (
      <div>
        <Swiper
          className={classes.swiper}
          spaceBetween={1000}
          slidesPerView={1}
          autoplay={{
            delay: 8000, // интервал в мс (5 сек)
            disableOnInteraction: false, // автопрокрутка возобновляется после ручного переключения
          }}
          navigation={true} // включает стрелки «назад/вперёд»
          modules={[Autoplay]}
          onSwiper={(instance) => setSwiper(instance)}
          loop={true} // бесконечная прокрутка (опционально)
        >
          {feedback.map(item =>
            <SwiperSlide className={classes.slide}>
              {item}
            </SwiperSlide>
          )}
        </Swiper>

        {/* Блок со стрелками внизу экрана */}
        <div className={classes.buttons_box}>
          <button
            className={classes.button}
            onClick={() => swiper?.slidePrev()}
            aria-label="Предыдущий слайд"
          >
            <svg className={classes.button_arrow_l} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <path d="M 375.5 175 Q 382.9 174.1 386.5 177 L 510 249.5 Q 512.8 252.2 512 258.5 L 507.5 265 L 386.5 335 Q 383.2 338.2 375.5 337 L 370 332.5 L 369 323.5 L 374.5 317 L 461 267.5 L 10.5 267 L 6.5 266 L 2 262.5 Q -0.8 259.8 0 253.5 L 3.5 248 L 11.5 245 L 461 244.5 L 377.5 197 L 370 190.5 L 369 181.5 L 373.5 176 L 375.5 175 Z " />
            </svg>
          </button>

          <button
          className={classes.button}
            onClick={() => swiper?.slideNext()}
            aria-label="Следующий слайд"
          >
            <svg className={classes.button_arrow_r} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <path d="M 375.5 175 Q 382.9 174.1 386.5 177 L 510 249.5 Q 512.8 252.2 512 258.5 L 507.5 265 L 386.5 335 Q 383.2 338.2 375.5 337 L 370 332.5 L 369 323.5 L 374.5 317 L 461 267.5 L 10.5 267 L 6.5 266 L 2 262.5 Q -0.8 259.8 0 253.5 L 3.5 248 L 11.5 245 L 461 244.5 L 377.5 197 L 370 190.5 L 369 181.5 L 373.5 176 L 375.5 175 Z " />
            </svg>
          </button>
        </div>
      </div>
    );
}

export default SliderFeedback;