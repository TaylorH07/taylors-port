import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#02020c] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-[#45ffd7] anaglyph'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div className=' sm:text-right text-4xl font-bold '>
            <p>
              {' '}
               I am thrilled that you are here! Please take a look around.{' '}
            </p>
          </div>
          <div>
            <p>
              -- Results-driven Learning & Development Specialist with
              experience in training, instructional design, and content
              development. Skilled at delivering engaging training programs in
              both virtual and in-person settings and leveraging adult learning
              principles to enhance knowledge retention. Skilled in curriculum
              development, Learning Management System (LMS) administration, and
              training evaluation – ensuring effective learning experiences that
              align with organizational goals. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
