'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Eric Hansson",
    role: "Brand Strategist",
    text: "Super helpful and easy to work with and when we needed a custom option set up with our systems, their customer service was quick, wonderful, and helpful. We get more orders automatically when customer gets the notice that their item is in. ",
    image: "/jobber2.jpg",
  },
  {
    name: "Karen Adamson",
    role: "Sr, Marketing Manage",
    text: "Totally worth it, has saved us heaps of time and helps customers enormously. Great for businesses like ours that stock the same seasonal products year in year out that are popular and sought after! Love it. Thanks Frank and team",
    image: "/jobber2.jpg",
  },
  {
    name: "Anush Parker",
    role: "Founder",
    text: "I wasn’t sure how to stand out in my new niche. Chris and the team helped me find clarity and a clear direction: create valuable content, charge what I’m worth, and delegate what I don’t need to do",
    image: "/jobber2.jpg",
  },
  {
    name: "Julia Simpson",
    role: "Entrepreneur",
    text: "Really pleased with the service & its functionality, ability to customise our program and also the support when needed, would definitely recommend.",
    image: "/jobber2.jpg",
  },
];

const Testimonia = () => {
  return (
    <motion.section
      className="py-20 bg-[#F5F5F5] text-[#2C1F02] font-sans"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-lg md:text-2xl font-bold mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hundreds of founders, creators, and business owners trust our tools,
          support, and strategy to help them grow smarter and live better.
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          className="!items-stretch"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition duration-300 w-full h-full"
                style={{ minHeight: "350px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-[#F0D267] text-2xl mb-4" />
                <p className="text-gray-700 italic text-base mb-6 leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-sm font-bold">{t.name}</h4>
                    <span className="text-xs text-[#1B264F]">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonia;
