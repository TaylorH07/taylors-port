import React from 'react'
import Csharp from '../assets/cSharp.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Java from '../assets/java2.png';
import Python from "../assets/python.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Express from "../assets/express.png";
import MySQL from "../assets/mysql.png";


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#02020c] text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#45ffd7] anaglyph' > Skills </p>
                <p className='py-4 '> -- These are a few of the technologies I have worked with: </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 '>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt="React icon" />
                    <p className='my-4 '>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4 '>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4 '>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-16 mx-auto' src={Java} alt="TailWind icon" />
                    <p className='my-4 '>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Python} alt="CSS icon" />
                    <p className='my-4 '>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-28 mx-auto' src={MySQL} alt="React icon" />
                    <p className='my-4 '>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Csharp} alt="React icon" />
                    <p className='my-4 '>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-4 '>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-40 mx-auto' src={Express} alt="React icon" />
                    <p className='my-4 '>Express</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4 '>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4 '>Node</p>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Skills