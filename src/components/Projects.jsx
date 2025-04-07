import React from 'react'
import MAF from '../assets/MAF-SS.png'
import PPChron from '../assets/paw-chronicles-SS.png'
import WDash from '../assets/weather-Dash-SS.png'
import NoteSS from '../assets/noteTakerSS.png'
import workdaySS from '../assets/workdaySS.png'
import ddelivery from '../assets/doug-deliveriesSS.png'

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#02020c]'
    >
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#45ffd7] anaglyph '>
            Projects
          </p>
          <p className='py-6 '> -- Check out some of my recent projects: </p>
        </div>
        {/* Grid container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4  '>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${MAF})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Interactive Front-End
              </span>
              <div className='pt-8 text-center'>
                <a
                  href=' https://github.com/TaylorH07/movie-actor-finder'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${PPChron})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Full-Stack Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/TaylorH07/pawprint-chronicles'
                  target=' _blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${ddelivery})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Full-Stack Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/TaylorH07/dougie-deliveries'
                  target=' _blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${WDash})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Server-Side API
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/TaylorH07/weather-dashboard'
                  target=' _blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          {/* <div 
                    style={{ backgroundImage: `url(${TeamGen})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects */}
          {/* <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-gray-500 tracking-wider ' >
                            Object-Oriented Program
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Deployed</button>
                            </a>
                            <a href="https://github.com/TaylorH07/team-profile-generator" target="_blank" >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Repo</button>
                            </a>
                        </div>
                    </div>
                </div> */}

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${workdaySS})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Third-Party API
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/TaylorH07/workday-scheduler'
                  target=' _blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${NoteSS})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-gray-500 tracking-wider bg-white'>
                Express.js Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/TaylorH07/note-taker'
                  target=' _blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                    {' '}
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects