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
    image: "/3.jpg",
    description:
      "Scale your store without the stress—our team handles customer queries, issue resolution, and support so you can focus on growth."
  },
  {
    id: 2,
    title: "Digital Products",
    image: "/2.jpg",
    description:
      "Access digital playbooks that simplify decision-making and give you the clarity to scale confidently—on your own terms."
  },
  {
    id: 3,
    title: "Lifestyle/Business Consultancy",
    image: "/1.jpg",
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
      <h1 className='h-4 w-4 bg-[#F0D267] rounded-full mx-auto animate-bounce shadow-lg'></h1>
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span className="text-[#F0D267]">Services</span>
      </motion.h1>

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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {services.map((offer) => (
          <motion.div
            key={offer.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            variants={cardVariants}
          >
            <div className="p-4">
              <Image
                src={offer.image}
                alt={offer.title}
                height={30}
                width={60}
                className="shadow-lg p-3 rounded"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {offer.title}
              </h2>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Offers;
