'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Abouts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="py-14 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
       
        {/* Image section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about.jpg"
            alt="Our Team"
            width={450}
            height={150}
            className="rounded-2xl  object-cover"
          />
         
        </motion.div>

        {/* Text section */}
        <motion.div
          className="space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1B264F]">About us</h2>
          <hr className='w-[50px]' />
          <p className="text-lg text-gray-800 leading-relaxed">
            At the intersection of e-commerce, digital experience, and modern living, we exist to 
            help businesses and individuals operate smarter and live better. With a background rooted in operational excellence and client-centric execution, we deliver bespoke solutions that drive measurable impact. Whether you're scaling a storefront or redefining your personal workflow, we’re here to elevate your journey.

          </p>

          <Link href="/about">
            <button className="bg-[#F0D267] p-3 rounded-full w-full lg:w-[200px] cursor-pointer hover:opacity-90 transition">
              Know more
            </button>
          </Link>
        </motion.div>

      </section>
    </motion.div>
  );
};

export default Abouts;
