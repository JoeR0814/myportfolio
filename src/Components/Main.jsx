import React from 'react';
import Image from '../assets/timmyme.jpg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Main() {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover' src={Image} alt='my-son' />
      <div className='w-full h-screen absolute top-2 left-0 z-10 flex flex-col justify-center items-center gap/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center text-white-600 lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-white'>
            I'm Joe Reis
          </h1>
          <h2 className='flex sm:text-4xl text-5xl pt-4 text-white-600 capitalize'>
            I am a-
            <TypeAnimation
              sequence={[
                'Lifelong Learner',
                1000,
                'Full-Stack Web Developer',
                1000,
                'entrepreneur',
                1000,
                'Family Man',
                1000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            />
          </h2>
          <div className='flex  justify-center text-red-600 pt-6 max-w-[200px] w-full'>
            <FaLinkedinIn className='cursor-pointer' size={30} />
            <FaGithub className='cursor-pointer' size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

