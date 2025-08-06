"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah",
    role: "First-time Buyer",
    text: "Nestify made buying our first home an incredible experience. They guided us with clarity and patience at every step.",
    image: "/jobber2.jpg",
  },
  {
    name: "Mark",
    role: "Landlord",
    text: "Their property management services are efficient, friendly, and stress-free. I never worry about my rentals anymore.",
    image: "/jobber2.jpg",
  },
  {
    name: "Emily",
    role: "Renter",
    text: "I found the perfect apartment through Nestify in just days. The experience was smooth and the listings were top quality.",
    image: "/jobber2.jpg",
  },
  {
    name: "Jason",
    role: "Investor",
    text: "Nestify helped me find valuable properties with great ROI. Their agents know the market inside out.",
    image: "/jobber2.jpg",
  },
  {
    name: "Emmanuel",
    role: "Seller",
    text: "Selling my home was fast and easy with Nestify. They handled everything professionally and with care.",
    image: "/jobber2.jpg",
  },
  {
    name: "Daniel",
    role: "Tenant",
    text: "Great experience from start to finish. Highly recommend Nestify to anyone looking for a home.",
    image: "/jobber2.jpg",
  },
];

const Testimonia = () => {
  return (
    <section className="py-20 bg-[#F5F5F5] text-[#2C1F02] font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F0D267]">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between hover:shadow-xl transition duration-300">
                <FaQuoteLeft className="text-[#F0D267] text-2xl mb-4" />
                <p className="text-gray-700 italic text-base mb-6 leading-relaxed">“{t.text}”</p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-sm font-bold">{t.name}</h4>
                    <span className="text-xs text-[#1B264F]">{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonia;
