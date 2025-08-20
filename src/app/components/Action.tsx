import React from 'react';
import Link from 'next/link';

const Action = () => {
  return (
    <div>
        <section className="bg-[#1B264F] text-white py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Not sure where to start?</h2>
        <p className="mb-6">Book a free clarity call with our team today.</p>
       <Link href="/contact"><button className="bg-[#F0D267] text-black px-6 py-3 rounded-full hover:opacity-90 transition cursor-pointer">Book a Call</button></Link>
      </section>
    </div>
  )
}

export default Action;