import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialData from "./Data";
import "../css/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial wrapper">
      <div className="testimonial-inner container">
        <motion.h4
          className="testimonial-title"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
        >
          What they’ve said
        </motion.h4>

        {/* Desktop Swiper */}
        <Swiper
          className="mySwiper desktop-swiper"
          spaceBetween={32}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-card">
              <div>
                <img
                  src={testimonial.icon}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-parag">{testimonial.parag}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Swiper */}
        <Swiper
          className="mySwiper mobile-swiper"
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-card">
              <div>
                <img
                  src={testimonial.icon}
                  alt={testimonial.name}
                  className="testimonial-img"
                />
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-parag">{testimonial.parag}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.a 
      className="link testimonial-cta"
      variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
      >
        Get Started</motion.a>
    </div>
  );
}

export default Testimonial;
