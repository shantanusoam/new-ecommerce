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
// import { isDesktop, isTablet } from 'react-device-detect';

export default function Catlog({ Catlogdata }) {
  console.log(`dataaaaaaaaaaaaaaaaaa ${Catlogdata}`);
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
  function returnView() {
    if (isDesktop) {
      return mydata.thebox.map((element) => (
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
          {mydata.thebox.map((element) => (
            <SwiperSlide>
              <a
                target="_blank"
                href={element.url}
                className={` flex-1 h-80 itemM  transition-all delay-75 bg-cover bg-no-repeat bg-center `}
                style={{
                  backgroundImage: `url(${element.Simg})`,
                }}
              ></a>
            </SwiperSlide>
          ))}
        </Swiper>
      ));
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
          {mydata.thebox.map((element) => (
            <SwiperSlide>
              <a
                target="_blank"
                href={element.url}
                className={`demo itemM  bg-contain bg-no-repeat bg-left h-full flex-1`}
                style={{
                  backgroundImage: `url(${element.Simg})`,
                }}
              ></a>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  }
  return (
    <>
      <div className="bg-businessbackground" id="BusinessVerticles">
        <div className="u-center-text u-margin-bottom-big">
          {/* {Catlogdata.map((data, index) => {
            <h2 class="heading-secondary">{data.name}</h2>;
          })} */}
        </div>
        <div className="row">
          {/* <div class="col-1-of-3">{returnView()}</div> */}
        </div>
      </div>
    </>
  );
}
