'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


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
        image: "/offer.jpg",
        description:
            "Scale your store without the stress—our team handles customer queries, issue resolution, and support so you can focus on growth."
    },
    {
        id: 2,
        title: "Digital Products",
        image: "/offer6.jpg",
        description:
            "Access digital playbooks that simplify decision-making and give you the clarity to scale confidently—on your own terms."
    },
    {
        id: 3,
        title: "Lifestyle/Business Consultancy",
        image: "/offer7.jpg",
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

const Product = () => {
    return (
        <motion.section
            className="bg-[#F5F5F5] py-20 px-5"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
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
                Choose from our range of products and services designed to empower entrepreneurs and fuel business growth.
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
                            <div className='mt-5'>
                                <Link href="" className=' font-bold text-sm hover:bg-[#F0D267] p-2 rounded-full transition'>  Shop product →</Link>
                            </div>


                        </div>



                    </motion.div>
                ))}
            </motion.div>
            <div className='text-center mt-16'>
                <Link href="">
                    <button className="bg-[#F0D267] text-black font-medium px-6 py-3 rounded-full w-full lg:w-[200px] shadow-md hover:bg-[#e6c95f] hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
                        Shop All Products
                    </button>
                </Link>

            </div>
        </motion.section>
    );
};

export default Product;
