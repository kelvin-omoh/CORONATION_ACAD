"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slide1 from '../public/slide1.jpeg'
import slide2 from '../public/slide2.jpeg'
import slide3 from '../public/slide3.jpeg'

import Image from 'next/image'

const Slider = () => {
  return (
    <div className='w-[100%] relative'>
      <Carousel
        interval={3000} // Set the autoplay interval to 3 seconds (adjust as needed)
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={false} // Allow autoplay to continue even on hover
        transitionTime={500}
        emulateTouch={true}
        autoFocus={true}
        swipeable={true}
      
      >
        <div className='relative'>
          <div className='bg-black opacity-40 w-full h-full absolute'></div>
          <Image className='w-[50vw]  h-[90vh]' src={slide1} alt="" />
        </div>
        <div className='relative'>
          <div className='bg-black opacity-40 w-full h-full absolute'></div>
          <Image className='w-[90vw] h-[90vh]' src={slide2} alt="" />
        </div>
        <div className='relative'>
          <div className='bg-black opacity-40 w-full h-full absolute'></div>
          <Image className='w-[90vw] h-[90vh]' src={slide3} alt="" />
        </div>
      </Carousel>
      <div  className='flex flex-col justify-center items-center w-full gap-5 text-[1.2em] md:text-[1.9em] absolute text-white z-[2] top-[50%]'>
        <p className='flex gap-5 text-center'>Committed to Achieving Excellence <br />
          At Coronation - Prep - Academy,<br /> our primary goal is to foster an environment <br /> where students thrive as joyful, self-assured, and passionate learners.</p>
        <button id='about' className='bg-[#3b1f65] p-4 rounded-lg text-white'>Start a Course</button>
      </div>
    </div>
  );
}

export default Slider;
