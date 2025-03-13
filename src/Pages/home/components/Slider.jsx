import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../styles/Slider.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation,Autoplay]}
      navigation
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src="https://fruteacorp.uz/wp-content/uploads/2022/02/горизонтальная-поменьше-для-обложки-1-scaled.jpg"
          alt="img1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://fruteacorp.uz/wp-content/uploads/2023/06/fruteabar1-scaled.jpg"
          alt="img2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://fruteacorp.uz/wp-content/uploads/2023/06/37-scaled.jpg"
          alt="img3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://fruteacorp.uz/wp-content/uploads/2023/06/ENERGY1-scaled.jpg"
          alt="img4"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
