import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Image from 'next/image'
import { FaBook, FaGraduationCap, FaSchool } from 'react-icons/fa'

export default function Home() {
  return (
   <div >

     <Slider />
     <div    className='  py-4 '>
      <div className=' px-[2em]  md:px-[10em]'>
 <h2  className=' primary text-center text-[1.5em] md:text-[3em] font-bold'> WELCOME TO CORONATION PREP ACADEMY </h2>

 <div>
 <p  className=' text-[1em] md:text-[1.3em] py-3 text-start md:text-justify leading-8 md:leading-9'>

 Coronation Prep Academy is a distinguished educational institution, deeply committed to fostering the growth and development of young minds in our beautiful and serene campus located in [ behind Kuje Stadium, 900105, Kuje,Abuja,Nigeria ]. Our motto, &quot;Knowledge Builds Bridges,&quot; encapsulates our dedication to providing a strong foundation of learning that bridges the gap between today&lsquo;s educational journey and the future of our students.
</p>
<p className=' text-[1em] md:text-[1.3em] py-3 text-start md:text-justify leading-8 md:leading-9'>

As a private, co-educational, and independent day-school, we cater to a diverse student body, welcoming pupils of any nationality. Our educational programs span from Crèche, Pre-Elementary through Elementary levels, ensuring a holistic and comprehensive learning experience. Our Crèche and Pre-Elementary classes cater to children aged between 5 months and 5 years, while the Elementary School nurtures students aged 6 to 10 years.
</p>
<p className=' text-[1em] md:text-[1.3em] py-3 text-start md:text-justify leading-8 md:leading-9'>

At Coronation Prep Academy, we believe that education is a collaborative effort between the school and the home. We encourage active participation from parents, teachers, and pupils, creating a harmonious learning community. This collaboration promises an exciting educational journey filled with numerous opportunities for our children, parents, and dedicated staff.
</p>
<p className=' text-[1em] md:text-[1.3em] py-3 text-start md:text-justify leading-8 md:leading-9'>

We understand that quality education at the foundational level is paramount in shaping a child&lsquo;s future. Our institution is dedicated to providing high-quality education that equips children with knowledge, skills, and exposure that will positively impact their immediate families and, ultimately, society as a whole.

Coronation Prep Academy is fully equipped to meet the highest academic standards, preparing our students for the challenges of the 21st century. We are committed to nurturing a new generation of educated and responsible citizens who will contribute to creating a brighter and better society. Our mission is to light the torch of knowledge and guide our students towards a future filled with success and opportunities.
</p>
<p className=' text-[1em] md:text-[1.3em] py-3 text-start md:text-justify leading-8 md:leading-9'>

At Coronation Prep Academy, we believe that knowledge is the key to building bridges that connect individuals to a world of possibilities. Join us on this remarkable educational journey, where we empower young minds to reach their fullest potential and become the leaders and innovators of tomorrow. Together, we build bridges to a brighter future.
</p>
 </div>
     

      </div>
     
<div   style={{
    background: `url(./show.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
 

  }} className=' p-4 grid-cols-1 lg:grid-cols-3 h-full   grid grid-col  flex-col md:flex-row gap-[1.2em] w-full'>
  {/* CARD */}
  <div className=' bg-[#ffffffd1] flex flex-col gap-2 p-4 rounded-md'>
    <div className=' h-[28em] mx-auto w-[20em]'>
    <Image width={900} height={9000} src='/propitor.jpeg'   className='object-cover  rounded-lg h-full    text-center w-full mx-auto '  alt='' />

    </div>
    <h1 className=' mx-auto font-semibold'>Yahaya Usman Saratu </h1>
    <h3 className='mx-auto font-bold text-[1.2em] underline '>Proprietress / CEO</h3>
    <p className='text-left tex-w leading-9 w-full lg:w-[30vw]'>
        Allow me to introduce you to <span className='font-bold text-[1.1em] primary'>CORONATION PREP ACADEMY,</span> a beacon of academic excellence. I extend a warm welcome to both you and your child. Our institution enjoys a stellar reputation, cherished by parents and students alike. Before we proceed, I want to express my profound gratitude to the Almighty Allah for His continuous grace, mercy, and inspiration that have led to the establishment of this esteemed school.
    </p>
</div>
 
  
    <div className='text-left tex-start bg-white p-5 leading-9'>
      
      <h1 className=' primary font-bold text-[1.8em] underline text-center mb-8 '>Choose Coronation Prep Academy and Embark on a Remarkable Journey</h1>
      <ul className=' list-disc '>
        <li> <span className=' font-bold'>Diverse Curriculum:</span> We offer a diverse and comprehensive curriculum that prepares students for a wide range of academic and career paths.</li>
        <li> <span className=' font-bold'>Global Perspective:</span>Our institution promotes a global perspective through international exchange programs, fostering cultural understanding and global citizenship.</li>
        <li> <span className=' font-bold'>Inclusive Education: </span>We are committed to inclusive education, ensuring that every student&lsquo;s unique learning needs are met.</li>
       
        <li> <span className=' font-bold'>Interactive Learning: </span>We utilize modern teaching methods, including interactive whiteboards and technology, to make learning engaging and effective.</li>
        <li> <span className=' font-bold'>Holistic Development: </span>Our programs focus on holistic development, nurturing not only academic excellence but also character, leadership, and social skills.</li>
        <li> <span className=' font-bold'>Parental Involvement:</span> We value parental involvement and maintain open lines of communication to ensure the success and well-being of our students.</li>
        <li> <span className=' font-bold'>Sports and Athletics:</span> Our sports programs provide opportunities for physical fitness, teamwork, and sportsmanship.</li>
        <li> <span className=' font-bold'>Arts and Creativity:</span>  We foster creativity and artistic expression through various arts programs and extracurricular activities.</li>
        <li> <span className=' font-bold'> Ethical Values:</span>Our institution is grounded in ethical values, promoting honesty, integrity, and empathy among our students.</li>
        <li> <span className=' font-bold'>Career Guidance:</span> Our career guidance services help students make informed decisions about their future careers and educational pathways.</li>
        <li> <span className=' font-bold'>Parent-Teacher Collaboration:</span> We promote collaboration between parents and teachers to create a supportive and enriching learning environment.</li>

      </ul>

     


  












      
</div>

<div className=' bg-[#ffffffd1] flex flex-col gap-2 p-4 rounded-md'>

<div className=' bg-[#ffffffd1] flex flex-col gap-2 p-4 rounded-md'>
    <div className=' h-[28em] mx-auto w-[20em]'>
    <Image width={900} height={9000}src='/principal.jpeg'  className='object-cover  rounded-lg h-full    text-center w-full mx-auto '  alt='' />

    </div>
    <h3 className=' mx-auto text-center font-semibold'>Mr James Arllo</h3>
    <h3 className='mx-auto font-bold text-[1.2em] underline '>Principal</h3>
    <p className='text-left tex-w leading-9 w-full md:w-[30vw]'>
    I am deeply committed to providing our students with a nurturing and enriching learning environment. Our dedicated team of educators, staff, and I work tirelessly to ensure that every student&lsquo;s potential is unlocked, and their dreams are nurtured. We believe in fostering not just academic excellence but also character development, as we prepare our students to become responsible and compassionate individuals ready to excel in a rapidly changing world. Together, we inspire a brighter future for every student who walks through our doors.   </p>
</div>
   
    
   
</div>
</div>


<section className=' px-[2em] gap-[5em] flex-col md:flex-row   justify-center items-center  lg:px-[10em] mt-[5em] flex w-full'>
    <div className=' flex justify-center items-center flex-col gap-4'>
    <div className=' p-[1.5rem] lg:p-[3rem] delay-300 ease-in-out  transition-all  bg-[#8000805e] rounded-full'>
      <FaGraduationCap className=' primary' size={40}/>
      </div>
      <h2 className='primary font-bold justify-center text-center mx-auto  uppercase text-[1.5rem]'>PRE - ELEMENTARY SCHOOL</h2>
      <p className=' leading-9'>The children in Early Years and Foundation stage are between 1 and 4 years. This is an important stage in every child’s life and development. We are aware of this and we have made learning as fun as possible.</p>
    </div>
    <div className=' flex justify-center items-center flex-col gap-4'>
      <div className=' p-[1.5rem] lg:p-[3rem] bg-[#8000805e] rounded-full'>
           <FaBook  className=' primary' size={40}/>
      </div>
   
      <h2 className='primary font-bold  uppercase text-[1.5rem]'>ELEMENTARY SCHOOL</h2>
      <p className=' leading-9'>The child seeking admission into the elementary school must be at least six (6) years of age on or before August 31st of the year of admission for our Elementary 1 class.</p>
    </div>
    <div className=' flex justify-center items-center flex-col gap-4'>
      <div className=' p-[1.5rem] lg:p-[3rem] bg-[#8000805e] rounded-full'>
           <FaSchool  className=' primary' size={40}/>
      </div>
   
      <h2 className='primary font-bold  uppercase text-[1.5rem]'>JUNIOR HIGH SCHOOL</h2>
      <p className=' leading-9'>The child seeking admission into junior school must be at least (11) years of age on or before August 31st of the year of admission for our Elementary 1 class.</p>
    </div>
  </section>


     <section className=' px-[0em] lg:px-[10em] mt-[5em] w-full'>

        <div>
        <h1 className=' underline primary font-bold text-[1.8em]  text-center mb-8 '>
        Our Facilities
        </h1>
      </div>

      {/* cards  */}
      <div className='  flex w-full flex-col justify-center md:justify-start items-center md:items-start   md:flex-row  px-3   overflow-x-scroll  gap-8  '>
      <div className=' w-fit  '>
      <Image width={900} height={9000} src="/environment.jpeg" className='  rounded-lg max-h-[15em]  h-[15em] w-[20em] max-w-[20em] ' alt="" />
            <p className=' px-2 font-semibold text-center w-full py-4'> Conducive environment</p>
          </div>
          <div className='  w-fit'>
          <Image width={900} height={9000} src="/classRoom.jpeg" className=' rounded-lg max-h-[15em] h-[15em] w-[20em] max-w-[20em] ' alt="" />
            <p className=' px-2 font-semibold text-center w-full py-4'> Good Learning environronment <br /> / Class Room</p>
          </div>
         
          <div className='  w-fit'>
          <Image width={900} height={9000} src="/bus.jpeg" className=' rounded-lg max-h-[15em] h-[15em] w-[20em] max-w-[20em] ' alt="" />
            <p className=' mx-auto font-semibold text-center w-full py-4'> Bus services</p>
          </div>
          <div className='  w-fit'>
          <Image width={900} height={9000} src="/ict.jpeg" className=' rounded-lg max-h-[15em] h-[15em] w-[20em] max-w-[20em] ' alt="" />
            <p className=' mx-auto font-semibold text-center w-full py-4'> Well equipped Ict Lab</p>
          </div>
          <div className='  w-fit'>
          <Image width={900} height={9000} src="/building.jpeg" className=' rounded-lg max-h-[15em] h-[15em] w-[20em] max-w-[20em] ' alt="" />
            <p className=' mx-auto font-semibold text-center w-full py-4'> Football pitch & Fun center</p>
          </div>
       
       
       
       
      </div>


     </section>

    


   </div>
 
   </div>
  )
}
