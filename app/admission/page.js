import React from 'react'

const page = () => {
  return (
    <div className=' py-[4em] w-full'>
         

          <div className=' w-full'> 
            <img  src={'/contact.png'} className='   z-[0]  w-full h-[15em] md:h-[30em] ' alt={''}/>
            <div className=' absolute text-white   top-[20%] md:top-[30%] px-[5em]'>
            <h1 className='text-[2em] md:text-[3em] font-semibold'> Admissions </h1>
            <p className='text-[1em] md:text-[1.5em]'> <span className=' font-bold text-red-400 '>Home - </span> Admission Procedures</p>
            </div>
           
       
          </div>

        
        <div className=' w-full grid grid-cols-1 px-[2em] lg:px-[10em] md:grid-cols-2 gap-5'>
            <div className=' shadow-lg bg-grey-100 p-6 rounded-lg my-5  w-full'>
                <h1 className=' primary text-center text-[1.5em] md:text-[3em] font-bold'>Admission Procedure Into Coronation Prep Academy</h1>
                <p className=' px-3 py-1 w-[10%] rounded-full bg-red-400'></p>
                <div className=' py-4 my-4 leading-8 '>
                    <p>Sales of admission forms start in January every year and can be purchased in the school or through our online platform. The child must have completed at least 5 years or its equivalent in a standard and accredited elementary school either in Nigeria or Abroad. The admission form must be filled and submitted with the following documents:</p>
                </div>
                <div className=' relative'>
                      <img  src={'/ad.jpg'} className='   z-[0]  w-full h-[15em] md:h-[30em] ' alt={''}/>
                      <div className=' absolute  top-[30%]   from-white to-purple-500  flex-row flex md:flex-col justify-center items-center '>
                          <img  src={'/logo.jpeg'} className='   z-[0]  w-[40%] md:w-[5em] top-[50%] mx-7   h-[2em] md:h-[5em] ' alt={''}/>
                    
                <h1 className=' font-[fantasy] font-extrabold text-[2em] md:font-bold lg:text-[5em] bg-gradient-to-r from-white to-[#c616c6] text-transparent bg-clip-text '>Admission Procedure</h1>
                      </div>
              
                </div>

                <div className=' grid gap-6 '>
                    <h1 className=' primary text-center text-[1.5em] my-5 underline md:text-[3em] font-bold'>Required Documents</h1>
                    <ul className=' bg-slate-100 shadow-lg p-8 rounded-md   text-[1.4em] grid grid-cols-1 lg:grid-cols-2 gap-7  list-disc'>
                        <li>Photocopy of Birth Certificate/ Sworn Affidavit</li>
                        <li>Photocopy of Last result Obtained from previous school</li>
                        <li>1 Recent Passport</li>
                        <li>Photocopy of the receipt of Purchase of admission form</li>
                    </ul>

                    <p className=' leading-8'>Once the form is submitted, the intending student, who must be at least ten years old by september of the year of admission, is invited for a written entrance examination. Only successful candidates will be invited for an oral interview. Prospective parents and thier children are allowed to have a tour round the school if they deisre.</p>
                </div>
              
            </div>
        <div>
           <div className=' bg-green-200 mt-3 p-4 rounded-md shadow-lg'>
            <h1 className=' primary text-center text-[1.5em] md:text-[3em] font-bold'>Admission Form <br /> Price</h1>
            <h1 className=' primary text-center text-[1.5em] md:text-[3em] font-bold'>N10,000.00</h1>
            <button className=' bg-white primary text-[1.3em] hover:bg-slate-500 cursor-not-allowed hover:text-white w-full  p-7 rounded-lg my-6'>GET OFFLINE FORM</button>
           </div>
        </div>
        </div>
       

    </div>
  )
}

export default page