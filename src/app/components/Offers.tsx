import React from 'react'
import Image from 'next/image'


interface offers {
    id: number,
    title: string,
    description: string,
    image:string
};

const services: offers[] = [
    { id: 1, title: "E-commerce Support", image:"/lang.svg", description: "Absolutely — here's a clean, structured version of your content arranged by page and section, ready for planning or development of your learning/consulting e-commerce brand website." },
    { id: 2, title: "Digital Products", image:"/lang.svg", description: "Absolutely — here's a clean, structured version of your content arranged by page and section, ready for planning or development of your learning/consulting e-commerce brand website." },
    { id: 3, title: "Lifestyle/Business Consultancy", image:"/lang.svg", description: "Absolutely — here's a clean, structured version of your content arranged by page and section, ready for planning or development of your learning/consulting e-commerce brand website." }
]



const Offers = () => {
    return (
        <div className='bg-[#F5F5F5] py-16'>
            <p className="text-xl max-w-2xl text-center mx-auto">
                "We power entrepreneurs and small businesses with scalable support, strategic insight, and digital resources."
            </p>

            <div className='grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-3 gap-6 p-8 mt-5'>
                {services.map((offer) => (
                    <div key={offer.id} className='rounded-lg shadow p-5'>
                      <Image className='w-fit mb-5' src={offer.image} width={200} height={100} alt='icon'/>
                        <h2 className='text-2xl font-bold mb-5'>{offer.title}</h2>
                        <p>{offer.description}</p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Offers