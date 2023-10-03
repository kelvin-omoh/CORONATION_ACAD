import Header from '@/components/Header'
import React from 'react'
import { FaFacebook, FaFacebookSquare, FaGoogle, FaInstagram, FaLocationArrow, FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa'

const page = () => {
  return (
    <> <Header/>
    <div className=' relative mt-[5.6em]'>
        
        <img  src={'/contact.png'} className='   z-[0]  w-full h-[20em] md:h-[40em] ' alt={''}/>
        <div  className=' z-[50]  absolute  top-[5%] md:top-[10%] w-full  px-9   text-white h-[30vh] '  >
            
            <h1 className=' text-[3.2em] md:text-[5.4em]'>Get In Touch</h1>
            <p className=' text-[1.4em]'> <span className=' text-red-500 '>Home</span> - Contact</p>
        </div>


        <div className='  grid grid-cols-1 md:grid-cols-2 px-7 gap-9  justify-center items-center w-full'>
            <div className=' border-black p-4 my-5 rounded-lg   border-[.3px]'>
            <div className='  shadow-lg p-4   '>
                <div className=' flex justify-between items-center'>
                     <h1 className='font-bold underline'>Phone</h1>
                     <FaPhone size={ 20}/>
                </div>

                <div className=' space-y-2'>
                    <p>+2347066122823</p>
                    <p>+2348037424880</p>
                </div>
                </div>


                <div className='  shadow-lg p-4   '>
                       
                     <div className='  w-full    flex justify-between items-center' > 
                     <h1 className='font-bold underline'>Address</h1>
                         <FaMapPin size={ 20}/>
                  
                    </div>
                    <div>
                          <p className=' space-y-5'>Coronation Prep Academy, Plot 15 Ademoh Ovurevu Isa St,<br /> Senior Staff Quarters, behind Kuje Stadium, 900105, Kuje, Abuja, Nigeria.</p>
                    </div>

                </div>


                <div className='  shadow-lg p-4   '>
                       
                     <div className='  w-full    flex justify-between items-center' > 
                     <h1 className='font-bold underline'>E-Mail</h1>
                         <FaMailBulk size={ 30}/>
                  
                    </div>
                    <div>
                          <p className=' space-y-5'>coronationprepacademy@gmail.com</p>
                    </div>

                </div>

                
                <div className='  shadow-lg p-4   '>
                       
                     <div className='  w-full    flex justify-between items-center' > 
                     <h1 className='font-bold underline'>Follow Us</h1>
                        
                  
                    </div>
                    <div className=' text-[purple] flex gap-4  items-center'>
                          <FaFacebookSquare size={ 30}/>
                          <FaInstagram size={ 30}/>
                          <FaGoogle size={ 30}/>
                     
                          
                    </div>

                </div>

            </div>
            <div className=' border-black p-4 my-5 rounded-lg   w-full  border-[.3px]'>
                     <form action="" className=' p-6 shadow-lg w-full'>
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center w-full '>
                            <div className=' border p-3 rounded-md  flex flex-col'>
                         <label htmlFor="">
                            Full Name
                         </label>
                         <input type="text" className=' border-[2px]  p-3 ' />  
                            </div>
                            <div className=' border p-3 rounded-md  flex flex-col'>
                         <label htmlFor="">
                            Email
                         </label>
                         <input type="email" className=' border-[2px]  p-3 ' />  
                            </div>

                        </div>

                        <div className=' my-7 '>
                            <textarea placeholder=' enter message ....' className=' p-3 h-[10em] md:h-[20em] bg-gray-100 border-[2px]  w-full' name="" id="" cols="50" rows="5"></textarea>
                        </div>

                        <button className=' bg-black text-white px-4 py-4 md:py-8  rounded-lg'>
                            Send Message
                        </button>
                       
                     </form>
                </div>
        </div>
    </div>
       
      
    </>
  )
}

export default page
