'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Abouts = () => {
  return (
    <motion.section
      className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about'
    >
      {/* Image Section */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Image
          src="/pic2.jpg"
          alt="Our Team"
          width={500}
          height={350}
          className="rounded-2xl object-cover shadow-lg"
        />
        {/* Decorative Accent */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F0D267] rounded-full opacity-30 blur-2xl"></div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="space-y-6"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold text-[#1B264F] tracking-tight">
          About Us
        </h2>
        <hr className="w-16 border-t-4 border-[#F0D267]" />

        <div className="flex gap-8 mt-8">
          <div className='shadow-lg p-4 rounded-md'>
          <Image
            src="/3.jpg"
            height={50}
            width={25}
            alt="about"
            className="opacity-90"
          />
          </div>
          <div className='shadow-lg p-4 rounded-md'>
          <Image
            src="/2.jpg"
            height={50}
            width={25}
            alt="about"
            className="opacity-90"
          />
          </div>
          <div className='shadow-lg p-4 rounded-md'>
          <Image
            src="/1.jpg"
            height={50}
            width={25}
            alt="about"
            className="opacity-90"
          />
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          At the intersection of <span className="font-semibold text-[#1B264F]">e-commerce</span>, 
          digital experience, and modern living, we exist to help businesses and 
          individuals operate smarter and live better. With a foundation rooted 
          in operational excellence and client-centric execution, we deliver 
          bespoke solutions that create measurable impact.
        </p>

        <Link href="/about">
          <button className="bg-[#F0D267] cursor-pointer px-6 py-3 rounded-full w-full md:w-auto text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
            Know More →
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Abouts;
