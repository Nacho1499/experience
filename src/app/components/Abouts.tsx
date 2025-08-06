import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Abouts = () => {
  return (
    <div>
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
                  
                  <Link  href="/about"><button className='bg-[#F0D267] p-2 rounded-full w-[200px] cursor-pointer'>Know more</button></Link>

                </div>
              </section>
    </div>
  )
}

export default Abouts