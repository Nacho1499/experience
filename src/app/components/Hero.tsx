'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="text-[#2C1F02] font-sans">
      <section
        className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-cover bg-center relative bg-fixed"
        style={{ backgroundImage: "url('/hero.jpg')" }} // Replace with your image path
      >
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-0"
        ></motion.div>

        {/* Content */}
        <motion.div
          className="z-10 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Turn your passion into a scalable brand—with the systems and strategy to support it
          </h1>

          <motion.div
            className="mt-6 flex gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Link href="https://calendar.google.com/calendar/u/2?cid=NjZlODQ5MGFhM2Q3YjQxNzRkZWRmMTBhMWRiMDQzZTg1ODAwYjgyODc2NzQ5OGExNTk0OGFhZDE2NzZjNWZlM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target='_blank'><button className="bg-[#F0D267] text-black px-6 py-3 cursor-pointer rounded-full hover:opacity-90 transition">
              Book a Discovery Call
            </button></Link>
            <button className="border border-white text-white px-6 py-3 cursor-pointer rounded-full hover:bg-white hover:text-[#2C1F02] transition">
              Explore Our Services
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
