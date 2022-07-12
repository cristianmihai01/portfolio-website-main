import React from 'react'

//import social components 

import {social} from '../data'
const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map( (item , index) => {  
        return( 
        <li className='flex justify-center items-center hover:text-accent transition-all duration-300' key={index}>
          <a className="text-base" href={item.href}>
                      {item.icon}
          </a>
        </li>)
      })}
    </ul>
  )
}

export default Socials