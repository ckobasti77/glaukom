import React from 'react'
import { BsPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-fourth text-secondary flex justify-center md:justify-between px-24 py-2 flex-wrap h-auto items-center rounded-t-2xl lg:rounded-t-full'>
        <span>Poliklinika Jatros. © 2023.</span>
        <span className='flex flex-col md:inline '>
          <a href="tel:+381 64 180 66 65" className='underline mx-4'>+381 64 180 66 65</a>
          <a href="mailto:jatros.ord@gmail.com" className='underline mx-4'>jatros.ord@gmail.com</a>
        </span>
    </div>
  )
}

export default Footer