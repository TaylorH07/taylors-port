import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#02020c] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/e3b9b708-de84-483b-bc2f-8900fda3225f" className='flex flex-col max-w-[600px] w-full ' >
            <div className='pb-8 ' >
                <p className='text-4xl font-bold inline border-b-4 border-[#45ffd7] text-gray-300 anaglyph' >Contact</p>
                <p className='text-gray-300 py-4 ' >-- Submit the form or send me an email - taylorh2343@gmail.com </p>
            </div>
            <input  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input  className='my-4 p-2 bg-[#ccd6f6] ' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#528082] hover:border-[#c0fdff] px-4 py-3 my-8 mx-auto flex items-center'> Get In Touch!</button>
        
        </form>
    </div>
  )
}

export default Contact