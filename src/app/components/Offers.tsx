'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Offer[] = [
  {
    id: 1,
    title: "E-commerce Support",
    image: "/pro1.jpg",
    description:
      "Scale your store without the stress—our team handles customer queries, issue resolution, and support so you can focus on growth."
  },
  {
    id: 2,
    title: "Digital Products",
    image: "/pro3.jpg",
    description:
      "Access digital playbooks that simplify decision-making and give you the clarity to scale confidently—on your own terms."
  },
  {
    id: 3,
    title: "Lifestyle/Business Consultancy",
    image: "/pro2.jpg",
    description:
      "Transform the way you work and live through bespoke consultancy that bridges strategy, structure, and sustainability."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Offers = () => {
  return (
    <motion.section
      className="bg-[#F5F5F5] py-20 px-5"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Decorative dot */}
      <h1 className='h-4 w-4 bg-[#F0D267] rounded-full mx-auto animate-bounce shadow-lg'></h1>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span className="text-[#F0D267]">Services</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg max-w-3xl text-center mx-auto text-gray-600 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We power entrepreneurs and small businesses with scalable support,
        strategic insight, and digital resources.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {services.map((offer) => (
          <motion.div
            key={offer.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300"
            variants={cardVariants}
          >
            {/* Image */}
            <div className="relative w-full h-40 md:h-48 overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {offer.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Offers;
