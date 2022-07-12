import React from 'react'

// import components brands data 

import {brands} from '../data'
const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center '>
        <div className="container mx-auto md:justify-between items-center flex flex-wrap justify-evenly">
            {brands.map( (brand , index) => {
                return (
                    <div key={index}>
                        <img src={brand.img} alt="" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Brands