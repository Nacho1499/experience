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
    image: "/lang.svg",
    description: "Scale your store without the stress—our team handles customer queries, issue resolution, and support so you can focus on growth."
  },
  {
    id: 2,
    title: "Digital Products",
    image: "/lang.svg",
    description: "Access digital playbooks that simplify decision-making and give you the clarity to scale confidently—on your own terms."
  },
  {
    id: 3,
    title: "Lifestyle/Business Consultancy",
    image: "/lang.svg",
    description: "Transform the way you work and live through bespoke consultancy that bridges strategy, structure, and sustainability."
  }
];

const Offers = () => {
  return (
    <motion.div
      className="bg-[#F5F5F5] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xl max-w-2xl text-center mx-auto">
        "We power entrepreneurs and small businesses with scalable support, strategic insight, and digital resources."
      </p>

      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-3 gap-6 p-8 mt-5">
        {services.map((offer, index) => (
          <motion.div
            key={offer.id}
            className="rounded-lg shadow p-5 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <Image
              className=" mb-5"
              src={offer.image}
              width={25}
              height={25}
              alt="icon"
            />
            <h2 className="text-2xl font-bold mb-5">{offer.title}</h2>
            <p>{offer.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offers;
