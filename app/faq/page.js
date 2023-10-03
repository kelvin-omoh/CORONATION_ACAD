'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const page = () => {


const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "When Should I Apply?",
            content: `Although Coronation prep-Academy operates Rolling Admissions, we recommend you apply as early as possible. Discount is given to a parent applying for more than a child and scholarship awaits the overall best student in the common entrance examination.`,
        },
        {
            title: "How Can I Apply?",
            content:
                "Visit the school and obtain form or apply online from our website, fill and send, it gets to our e mail address, after which, you make payment into the school bank account or at the school bursary on or before the examination date.",
        },
        {
            title: "What Happens When I Fill The Application Form?",
            content: `Following receipt of your application form, we will contact you through SMS or/and phone call to schedule the entrance examination for your child to ascertain his/her levels for entry into the school.For now its not available online so please visit the school it self `,
        },
        {
            title: "How Does The School Help With The Transition of New Student?",
            content: `With rolling admissions and our international profile, new children are always welcomed with open arms and not so much a novelty as an exciting new friend for the existing class.`,
        },
        {
            title: "How Does The School Help With The Transition of New Student?",
            content: <p>With rolling admissions and our international profile, new children are always welcomed with open arms and not so much a novelty as an exciting new friend for the existing class.</p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "purple",
    rowTitleColor: "purple",
    rowContentColor: 'grey',
    arrowColor: "red",
    width: "100%",
   
};

const config = {
    animate: true,
    expandIcon: "+",
    tabFocus: true,
    collapseIcon:'-'
     
};

  return (
    <div className=' py-[4em] w-full'>

<div className=' w-full'> 
<Image width={900} height={9000}  src={'/contact.png'} className='   z-[0]  w-full h-[15em] md:h-[30em] ' alt={''}/>
            <div className=' absolute text-white   top-[20%] md:top-[30%] px-[5em]'>
            <h1 className='text-[2em] md:text-[3em] font-semibold'> Admissions </h1>
            <p className='text-[1em] md:text-[1.5em]'> <span className=' font-bold text-red-400 '>Home - </span> Frequentky Asked Questions</p>
            </div>
            <div className=" md:w-[50%] w-[100%] px-7 mx-auto my-6  py-6 rounded-lg shadow-lg ">
                <Faq
                data={data}
                styles={styles}
                config={config}
                
            />
            </div>
            
           
       
          </div>

    </div>
  )
}

export default page