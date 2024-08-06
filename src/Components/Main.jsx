import React from 'react';
import Image from '../assets/utah.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Main() {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={Image}
        alt='utah'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-white'>
          <h1 className='sm:text-5xl md:text-7xl font-bold text-white-800 px-4 md:px-12'>
            I'm Joe Reis
          </h1>
          <h2 className='flex sm:text-3xl text-2xl md:text-5xl font-bold text-white px-4 md:px-12'>
            I'm A,
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Problem Solver',
                2000,
                'Entrepreneur',
                2000,
                'Family Man',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                color: 'black',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            />
          </h2>
          <div className='flex justify-evenly pt-2 max-w-[200px] w-full p-2'>
            <a href='https://www.linkedin.com/in/joe-reis-software-developer-b289802a2?trk=people-guest_people_search-card'>
              <FaLinkedinIn className='cursor-pointer' size={30} />
            </a>
            <a href='https://github.com/search?q=joer0814&type=repositories'>
              <FaGithub className='cursor-pointer' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

