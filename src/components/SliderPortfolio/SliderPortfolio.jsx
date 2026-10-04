// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
// import { Autoplay } from 'swiper/modules';
import { Autoplay, Navigation  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import classes from './SliderPortfolio.module.css'
import { useState } from 'react';

// images list
import portfolio_1 from '../../assets/images/portfolio/portfolio_1.jpg';
import portfolio_2 from '../../assets/images/portfolio/portfolio_2.jpg';
import portfolio_3 from '../../assets/images/portfolio/portfolio_3.jpg';
import portfolio_4 from '../../assets/images/portfolio/portfolio_4.jpg';
import portfolio_5 from '../../assets/images/portfolio/portfolio_5.jpg';
import portfolio_6 from '../../assets/images/portfolio/portfolio_6.jpg';
import portfolio_7 from '../../assets/images/portfolio/portfolio_7.jpg';
import portfolio_8 from '../../assets/images/portfolio/portfolio_8.jpg';
import portfolio_9 from '../../assets/images/portfolio/portfolio_9.jpg';
import portfolio_10 from '../../assets/images/portfolio/portfolio_10.jpg';
import portfolio_11 from '../../assets/images/portfolio/portfolio_11.jpg';

const SliderPortfolio = () => {
  const [swiper, setSwiper] = useState(null);
  const [portfolio, setPortfolio] = useState([
    portfolio_1, portfolio_2, portfolio_3, portfolio_4, portfolio_5, portfolio_6, portfolio_7, portfolio_8, portfolio_9, portfolio_10, portfolio_11,
  ])
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <div>
        <Swiper
          className={classes.swiper}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 8000, // интервал в мс (3 сек)
            disableOnInteraction: false, // автопрокрутка возобновляется после ручного переключения
          }}
          // navigation={true} // включает стрелки «назад/вперёд»
          modules={[Autoplay]}
          onSwiper={(instance) => {
            setSwiper(instance);
            setActiveIndex(instance.realIndex);
          }}
          onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
          loop={true} // бесконечная прокрутка (опционально)
          breakpoints={{
            // < 576px — 1 слайд, отступы те же
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // 768px — 2 слайда
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            // 992px — 3 слайда (можно оставить как дефолт)
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {portfolio.map((item, i) =>
            <SwiperSlide className={classes.slide}>
              <img className={activeIndex === i ? classes.imgActive : classes.img} src={item} alt="asdasd" />
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

export default SliderPortfolio;