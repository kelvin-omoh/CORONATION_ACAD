'use client'
import React, { useState } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {FaBars, FaTimes, FaTimesCircle} from 'react-icons/fa'
const Header = () => {
    const[hambugger,setHambuger]=useState(false)
  return (
    <div className=' bg-[#3b1f65] fixed z-[100] top-0  w-[100%] text-white '>
        <nav className=' flex justify-between   w-full   py-4 items-center  px-[1.6em] md:px-[4em]'>
            <div>
                    <Image className=' bg-white rounded-md' src={logo} alt="" height={300} width="100"/>
            </div>

            <div>
                <ul className=' hidden  md:flex justify-between gap-10 items-center  '>
                <li ><Link href={'/'}>HOME</Link></li>
                <li><Link href={'/#about'}>ABOUT</Link></li>
                <li><Link href={'/contact'}>CONTACT</Link></li>
                <li><Link href={'/admission'}>ADMISSIONS</Link></li>
                <li><Link href={'/faq'}>FAQ</Link></li>
              </ul>
            </div>
          
              
              
              <div className=' hidden md:block'>
                <button className=' bg-white text-black p-4 rounded-lg'>Apply Now</button>
              </div>
             
              <div className=' md:hidden block '>
                {!hambugger ?
                <FaBars  size={30} onClick={()=>setHambuger(!hambugger)} className=' block md:hidden  '/>: <FaTimesCircle size={30} className=' block md:hidden  '   onClick={()=>setHambuger(!hambugger)} />

            }
                
                <ul className={`flex flex-col fixed w-full right-0 top-[5.6em] bg-[#130329e5] p-8 rounded-lg z-[100] justify-between gap-10 items-center   ${!hambugger ? 'left-[400em]  transition-all duration-300   delay-100 ': '  transition-all ease-in   duration-300   delay-100 left-0'}   `}>
                <Link href={'/'}> <li onClick={()=>setHambuger(!hambugger)} className=' hover:font-bold transition-all delay-100 hover:text-[1.5em]'>HOME</li></Link>
                <Link href={'/#about'}><li onClick={()=>setHambuger(!hambugger)} className=' hover:font-bold transition-all delay-100 hover:text-[1.5em]'>ABOUT</li></Link>
               <Link href={'/contact'}> <li onClick={()=>setHambuger(!hambugger)}  className=' hover:font-bold transition-all delay-100 hover:text-[1.5em]'>CONTACT</li></Link>
                <Link href={'/admission'}><li  onClick={()=>setHambuger(!hambugger)} className=' hover:font-bold transition-all delay-100 hover:text-[1.5em]'>ADMISSIONS</li></Link>
                <Link href={'/faq'}><li onClick={()=>setHambuger(!hambugger)}  className=' hover:font-bold transition-all delay-100 hover:text-[1.5em]'>FAQ</li></Link>
              </ul>
              </div>

        </nav>
      


    </div>
  )
}

export default Header
