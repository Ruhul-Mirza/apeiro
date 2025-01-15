
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "./ui/card";

import "swiper/css";
import {ArrowLeftIcon,  ArrowRightIcon } from "@heroicons/react/24/outline";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
      
      name:"Ruhul"
    },
    {
      quote:
        "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      
      name:"ashraf"
    },
    {
      quote:
        "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line.",
      
      name:"mujju"
    },
    {
      quote:
        "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional akjsdhajs ashd9asdh asghytg78yasdf fyasf7yasdf 9afisbd nsiugasdfyu sghdfu9ayhsdf sdfgsy8afgusn ",
      name:"Ruhul"
    },
    {
      quote:
        "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      
      name:"ashraf"
    },
    {
      quote:
        "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line.",
      
      name:"mujju"
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(300);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(300);
  };

  return (
    <section
    className="relative w-full bg-gray-50 pt-28 pb-16"
    
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <Swiper
      slidesPerView="auto"
      centeredSlides
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      loop
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide
          key={testimonial.key}
          style={{            
            flexShrink: 1,
            height: 'auto',
          }}
        >
          {({isActive }) => <TestimonialCard {...testimonial}  isActive={isActive}/>}
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex mt-10 gap-4 justify-center">
      <button
        type="button"
        onClick={handlePrev}
        className="rounded-full p-2 border border-zinc-200 text-zinc-600 bg-white hover:bg-zinc-100"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="rounded-full p-2 border border-zinc-200 text-zinc-600 bg-white hover:bg-zinc-100"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  </section>
  );
}

export default Testimonial;
