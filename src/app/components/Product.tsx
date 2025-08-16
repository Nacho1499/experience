"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  pdf: string;
}

const services: Offer[] = [
  {
    id: 1,
    title: "E-commerce Support",
    image: "/pro1.jpg",
    pdf: "/pro1.pdf",
    description:
      "Scale your store without the stress—our team handles customer queries, issue resolution, and support so you can focus on growth.",
  },
  {
    id: 2,
    title: "Brand Style Guide Kits",
    image: "/style.jpg",
    pdf: "/Brand.pdf",
    description:
      "Inspired by the principle of the world’s most iconic brands, this 10+ plug-and-play guide book gives you the tools to define, refine, and scale your brand with confidence.",
  },
  {
    id: 3,
    title: "Lifestyle/Business Consultancy",
    image: "/pro2.jpg",
    pdf: "/pro2.pdf",
    description:
      "Transform the way you work and live through bespoke consultancy that bridges strategy, structure, and sustainability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPdf) {
      const link = document.createElement("a");
      link.href = selectedPdf;
      link.download = selectedPdf.split("/").pop() || "product.pdf";
      link.click();
    }

    setIsOpen(false);
  };

  return (
    <motion.section
      className="bg-[#F5F5F5] py-20 px-5"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h1 className="h-4 w-4 bg-[#F0D267] rounded-full mx-auto animate-bounce shadow-lg"></h1>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span className="text-[#F0D267]">Products</span>
      </motion.h1>

      <motion.p
        className="text-lg max-w-3xl text-center mx-auto text-gray-600 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Choose from our range of products and services designed to empower
        entrepreneurs and fuel business growth.
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
            <div className="relative w-full h-40">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {offer.title}
              </h2>
              <p className="text-gray-600">{offer.description}</p>
              <div className="mt-5">
                <button
                  onClick={() => {
                    setSelectedPdf(offer.pdf);
                    setIsOpen(true);
                  }}
                  className="font-bold text-sm cursor-pointer hover:bg-[#F0D267] px-4 py-2 rounded-full transition border border-[#F0D267]"
                >
                  View product →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <Link href="">
          <button className="bg-[#F0D267] cursor-pointer text-black font-medium px-6 py-3 rounded-full w-full lg:w-[200px] shadow-md hover:bg-[#e6c95f] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
            View All Products
          </button>
        </Link>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get Your Copy
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+234 000 000 0000"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F0D267] cursor-pointer text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-400 hover:shadow-md transition"
              >
                Download PDF
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Product;
