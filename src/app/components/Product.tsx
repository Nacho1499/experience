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

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const services: Offer[] = [
  {
    id: 1,
    title: "How To Negotiate Kit",
    image: "/nego.jpg",
    pdf: "/Negotiate.pdf",
    description:
      "This 10-page-hands-on guide is your blueprint for mastering negotiation with even the toughest clients. Backed with proven psychological frameworks,CEO tactics, and client-tested scripts.",
  },
  {
    id: 2,
    title: "Brand Style Guide Kit",
    image: "/style.jpg",
    pdf: "/Brand.pdf",
    description:
      "Inspired by the principle of the world's most iconic brands, this 10+ plug-and-play guide book gives you the tools to define, refine, and scale your brand with confidence.",
  },
  {
    id: 3,
    title: "Practical Business Management Kit",
    image: "/pro2.jpg",
    pdf: "/practical.pdf",
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Offer | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          productTitle: selectedProduct?.title || "",
          pdf: selectedProduct?.pdf || "",
        }),
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        throw new Error("Server did not return JSON.");
      }

      if (result.ok) {
        setSubmitStatus({
          type: "success",
          message: "Information saved successfully! Your download will start now.",
        });

        // Download the PDF
        if (selectedProduct?.pdf) {
          const link = document.createElement("a");
          link.href = selectedProduct.pdf;
          link.download = selectedProduct.pdf.split("/").pop() || "product.pdf";
          link.click();
        }

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "" });
          setIsOpen(false);
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to save information. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (product: Offer) => {
    setSelectedProduct(product);
    setIsOpen(true);
    setSubmitStatus({ type: null, message: "" });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
    setFormData({ name: "", email: "", phone: "" });
    setSubmitStatus({ type: null, message: "" });
  };

  return (
    <motion.section
      className="bg-[#F5F5F5] py-20 px-5"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      id="product"
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
              <hr  className="py-2 w-[50px] text-yellow-400 "/>
              <p className="text-gray-600">{offer.description}</p>
              <div className="mt-5">
                <button
                  onClick={() => openModal(offer)}
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

      {/* Enhanced Popup Modal */}
      {isOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
              disabled={isSubmitting}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Get Your Copy
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              {selectedProduct.title}
            </p>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@mail.com"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 000 000 0000"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#F0D267] focus:border-[#F0D267] outline-none transition"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-3 rounded-xl transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#F0D267] hover:bg-yellow-400 hover:shadow-md cursor-pointer"
                } text-gray-900`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                    Downloading...
                  </div>
                ) : (
                  "Download PDF"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Product;