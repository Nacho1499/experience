import Image from 'next/image';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import Action from '../components/Action';

const About = () => {
  return (
    <>
    <div className="bg-[#F5F5F5] text-[#2C1F02] font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/world.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-white text-lg max-w-2xl mx-auto leading-relaxed">
            Learn more about our journey, our values, and how we empower brands to thrive.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/hero.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1B264F]">Our Mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            At the intersection of <strong>e-commerce</strong>, <strong>digital experience</strong>, and <strong>modern living</strong>,
            we exist to help businesses and individuals operate smarter and live better. Our mission is rooted in creating seamless,
            impactful solutions for today’s professionals.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto mb-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#1B264F]">Our Story</h3>
        <div className="relative border-l-4 border-[#F0D267] pl-8 space-y-10">
          {[
            {
              year: '2020',
              title: 'The Beginning',
              desc: 'Founded to solve real-world workflow and support challenges for e-commerce brands.',
            },
            {
              year: '2022',
              title: 'Expansion',
              desc: 'Launched digital resources and remote consultancy solutions for global clients.',
            },
            {
              year: '2025',
              title: 'Today',
              desc: 'Empowering a network of modern professionals and entrepreneurs to operate smarter and live better.',
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[1.2rem] top-1.5 text-[#F0D267]">
                <FaDotCircle size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{item.year} — {item.title}</h4>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Pillars */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#1B264F]">Our Core Values</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Personalized Support',
            'Operational Efficiency',
            'Empowerment Through Knowledge',
            'Confidentiality & Trust',
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="text-3xl font-bold text-[#F0D267] mb-2">{index + 1}</div>
              <h4 className="font-semibold text-lg mb-2">{value}</h4>
              <p className="text-sm text-gray-600">
                We stand by {value.toLowerCase()} as a core pillar in everything we deliver.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Action/>
    </>
  );
};

export default About;
