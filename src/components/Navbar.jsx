import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/THlogo2.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#02020c] text-gray-300 z-10'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='anaglyph'>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='anaglyph'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='anaglyph'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='anaglyph'>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='anaglyph'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li> 
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl '>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li> 
        </ul>

        {/* Social Icons */}
        <div className ='hidden lg:flex fixed flex-col top-[35%] left-0' >
            <ul>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 '>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href=" https://linkedin.com/in/taylor-holmes-75a661186" target="_blank">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] '>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/TaylorH07" rel="noreferrer" target="_blank">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#66ad9c] '>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9381ff] '>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href="https://docs.google.com/document/d/1UVBFZn6hx4ORGUutvimE8Q4dAClsF8eDect_5zEZCl8/edit?usp=sharing">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar