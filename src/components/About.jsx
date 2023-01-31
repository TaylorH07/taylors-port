import React from 'react'

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
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
                <div className=' sm:text-right text-4xl font-bold '>
                    <p> Hey, I am ecstatic that you are here! I'm Taylor, please take a look around. </p>
                </div>
                <div>
                    <p>
                          - I graduated from SMU’s Full Stack Web Development Program while teaching students with learning disabilities,
                          and coaching track and football. I bring a strong work ethic, unparalleled patience, and an itch to learn and deliver great applications.
                          With strengths in creativity, teamwork, and building projects from ideation to execution, I’m eager to apply my knowledge,
                          and creatively solve problems to achieve the main goal.

                    </p>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default About