import React from 'react';
import './HomeSlider.scss';
import Banner1 from '../../assets/banner.png';
import Banner2 from '../../assets/banner2.png';
import Banner3 from '../../assets/banner3.jpg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const HomeSlider: React.FC = () => {
  return (
    <div className="Slider">
      <button className="Slider__button prev">
        <img src={arrowLeft} alt="left arrow" className="arrow" />
      </button>

      <div className="Slider__slides">
        <Swiper
          className="Slider__swiper"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next'
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link to="/phones">
              <img
                className="Slider__image img-1"
                src={Banner1}
                alt="Phones now available in our store!"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/tablets">
              <img
                className="Slider__image"
                src={Banner2}
                alt="Tablets now available in our store!"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/accessories">
              <img
                className="Slider__image"
                src={Banner3}
                alt="Accessories now available in our store!"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="Slider__button next">
        <img src={arrowRight} alt="right arrow" className="arrow" />
      </button>
    </div>
  );
};
