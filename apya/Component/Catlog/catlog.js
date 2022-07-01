import React from 'react';
// import { motion } from 'framer-motion';

// import { useSpring } from 'react-spring';

import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
import { useHover } from '../../Hooks/Hover';
import { client } from '../../lib/client';
import { Product } from '../../components';
import Sparkles from '../../animation/Sparkel';
// import { isDesktop, isTablet } from 'react-device-detect';

export const Catlog = ({ catlogData }) => {
  console.log(`dataaaaaaaaaaaaaaaaaa ${catlogData[0]}`);
  const [hoverRef, isHovered] = useHover();
  const isDesktop = useMediaQuery('(min-width: 780px)');
  //   const isTablet = useMediaQuery('(min-width: 780px)');
  //   const titleAnimation = useSpring({
  //     from: {
  //       transform: 'translateY(-30px)',
  //     },
  //     to: [{ transform: 'translateY(15px)' }],
  //     config: { mass: 3, tension: 500, friction: 25 },
  //   });

  function returnView(products) {
    console.log(products);
    if (isDesktop) {
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
        {products.map((element) => (
          <SwiperSlide>
            <Product
              key={element.product[0]._id}
              product={element.product[0]}
              products={products}
            />
          </SwiperSlide>
        ))}
      </Swiper>;
    } else {
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
          {products.map((element) => (
            <SwiperSlide>
              <Product
                key={element.product[0]._id}
                product={element.product[0]}
                products={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  }
  return (
    <>
      <div id="BusinessVerticles">
        {catlogData.map((data) => (
          <div className="u-center-text u-margin-bottom-small">
            <h2 class="heading-secondary" id={`scroll-${data.name}`}>
              <Sparkles>{data.name}</Sparkles>
            </h2>

            {/* {returnView(data.products)} */}
            <Swiper
              slidesPerView={isDesktop ? 5 : 1}
              freeMode={true}
              mousewheelControl={true}
              followFinger={true}
              spaceBetween={20}
              loop={true}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              autoplay={{
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {data.products.map((element) => (
                <SwiperSlide>
                  <div className="SliderBox">
                    <Product
                      key={element.product[0]._id}
                      product={element.product[0]}
                      products={data.name}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </>
  );
};
