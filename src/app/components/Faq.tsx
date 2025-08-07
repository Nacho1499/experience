"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


interface faqItem{
    question:string,
    answer:string
}
const faqs:faqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer personalized business support, digital resources, strategic insight, and operational tools tailored to small businesses and entrepreneurs.",
  },
  {
    question: "Who can use your platform?",
    answer:
      "Our platform is designed for small businesses, startups, solo entrepreneurs, and anyone seeking digital support to scale smarter.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up, choose the service you need, and one of our experts will reach out to guide you through the next steps.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. We prioritize confidentiality and trust by securing all data using modern encryption and access controls.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F5F5] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`transition-transform duration-300 text-gray-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="text-gray-700 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
