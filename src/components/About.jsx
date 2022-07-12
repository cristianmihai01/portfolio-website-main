import React from 'react'

// import about from data

import Image from '../assets/img/about.webp'
const About = () => {
  return (
    <section className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                <div className="flex flex-col items-center text-center lg:ietms-start lg:text-left">
                  <div className="flex flex-col">
                    <h2 className='text-3xl lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:'>
                      amirsadeh
                    </h2>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About