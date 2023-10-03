import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import { FaChevronRight, FaMailchimp, FaPhone } from 'react-icons/fa'
import { AiOutlineMail,} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
        <footer className=' text-white bg-[#3b1f65] py-[2em] lg:py-[5em] grid  grid-cols-1 lg:grid-cols-3  gap-5 lg:gap-[6em]  px-[2em] lg:px-[10em]  w-full  justify-between  '>
        <div className=' justify-center flex w-full flex-col'>
            <Image className=' bg-white  rounded-md' src={logo} alt="" height={300} width="400"/>
            <p className=' my-6 leading-7'>At Coronation Prep Academy, we believe that education is a collaborative effort between the school and the home. We encourage active participation from parents, teachers, and pupils, creating a harmonious learning community. This collaboration promises an exciting educational journey filled with numerous opportunities for our children, parents, and dedicated staff.</p>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full '>

            <div className=' '>
            <h1 className=' my-4 text-[1.5em] font-semibold'>SCHOOL HOURS</h1>
                <div className=' leading-6 flex gap-[.5em] items-center'>
                    <FaChevronRight/>
                    <p>Pre-Elementary School <br /> 7:45am - 2: 00pm</p>
                </div>
                <div className=' flex gap-[.5em] my-5   items-center'>
                    <FaChevronRight/>
                    <p>Elementary School <br />7:45am - 3:30pm.</p>
                </div>
                <div className=' flex gap-4 '>
                    <p>Except for Fridays where they <br /> close by 2.00pm</p>
                </div>

                <h1 className=' my-7 text-[1.5em] font-semibold'>ENQUIRIES</h1>
                <div className=' flex gap-[1em] my-5   items-center'>
                    <FaPhone/>
                    <p>+234 9092 641 624</p>
                </div>
                <div className=' flex gap-[1em] my-5   items-center'>
                    <AiOutlineMail/>
                    <p>Elementary School <br />7:45am - 3:30pm.</p>
                </div>
                
            </div>
           
       
        </div>
      
        <div className=' flex  items-center  w-full flex-col'>
                <h1>FACEBOOK FEED </h1>
                <p>Follow us on Facebook, Like and Share</p>



            </div>
    
        </footer>

    </div>
  )
}

export default Footer