import React from 'react';

const Hero = () => {
  return (
    <div className='text-[#2C1F02] font-sans'>
      <section
        className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }} // Replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Empowering Brands to Scale, Streamline, and Succeed
          </h1>
          <p className="mt-6 text-lg max-w-xl mx-auto text-white">
            We help e-commerce businesses and modern professionals unlock growth through expert customer support solutions, lifestyle and business strategy, and curated digital resources.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-[#F0D267] text-black px-6 py-3 rounded-full hover:opacity-90 transition">Book a Discovery Call</button>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2C1F02] transition">Explore Our Services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
