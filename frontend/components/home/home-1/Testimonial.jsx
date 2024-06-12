
'use client'

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { testimonial1 } from "../../../data/testimonialData";

const Testimonial = () => {
  return (
    <>
      <div className="row items-center x-gap-15 y-gap-20 justify-center">
        <div className="col-auto">
          <img
            width={150}
            height={150}
            src={'/img/testimonials/testimonial.JPEG'}
            alt="image"
            className="js-lazy rounded-circle"
          />
        </div>
        {/* <div className="col-auto">
          <h5 className="text-16 fw-500">{item.name}</h5>
          <div className="text-15 text-light-1 lh-15">
            {item.designation}
          </div>
        </div> */}
      </div>
      {/* <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">
        {item.text}
      </p> */}
      {/* <div className="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
        <div className="text-dark-1 fw-500 js-current">01</div>
        <div className="slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar" />
        <div className="text-dark-1 fw-500 js-all">03</div>
      </div> */}
    </>
  );
};

export default Testimonial;
