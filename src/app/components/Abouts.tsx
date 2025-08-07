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
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/world.webp"
            alt="Our Team"
            width={700}
            height={400}
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
          <h2 className="text-3xl font-bold text-[#1B264F]">Our Why</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            We exist to teach 1 million modern entrepreneurs how to build aligned businesses, master their time, and thrive on their own terms.
          </p>

          <Link href="/about">
            <button className="bg-[#F0D267] p-2 rounded-full w-[200px] cursor-pointer hover:opacity-90 transition">
              Know more
            </button>
          </Link>
        </motion.div>

      </section>
    </motion.div>
  );
};

export default Abouts;
