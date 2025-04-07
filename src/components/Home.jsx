import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import jellyFish from "../assets/jellyfishVid.mp4";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover '
        src={jellyFish}
        autoPlay
        loop
        muted
      />

      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      {/* Container */}
      <div className='absolute top-0 max-w-[1000px] px-10 flex flex-col justify-center h-full mx-14 '>
        <p className='text-[#c0fdff]'> Hi everyone, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#b8c6f4] '>
          {' '}
          Taylor Holmes.{' '}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#869ce4] '>
          {' '}
          I am your next Learning Specialist; Here's why...
        </h2>
        <p className='text-[#869ce4] py-4 max-w-[700px] '>
          -- Passionate about facilitating impactful learning initiatives that
          drive performance and professional growth.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#869ce4] hover:border-[#b8c6f4] anaglyph'>
            <Link to='projects' smooth={true} duration={500}>
              View Projects
            </Link>
            <span className='group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
