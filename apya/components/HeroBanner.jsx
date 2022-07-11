import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
const heroBanner = ({ heroBanner }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {heroBanner.map((element) => (
        <SwiperSlide key={element._id}>
          <div className="hero-banner-container">
            <div>
              <div className="Header__Slider-dataImage">
                <div>
                  <p className="beats-solo">{element.smallText}</p>
                  <h3>{element.midText}</h3>
                  <h1>{element.largeText1}</h1>
                </div>

                <img
                  src={urlFor(element.image)}
                  alt="headphones"
                  className="hero-banner-image"
                />
              </div>

              <div>
                <Link href={`/product/${element.product}`}>
                  <button type="button">{element.buttonText}</button>
                </Link>
                <div className="desc">
                  <h5>Description</h5>
                  <p>{element.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default heroBanner;
