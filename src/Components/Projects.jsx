// import React from 'react';
// import ProjectItem from './ProjectItem';
// import Image1Img from '../assets/busStopProject.png';
// import Image2Img from '../assets/formPages.png';
// import Image3Img from '../assets/guessTheNumber.png';
// import Image4Img from '../assets/textAdventureGame.png';
// import Image5Img from '../assets/jeopardyGame.png';
// import Image6Img from '../assets/personalToDoList.png';

// const Projects = () => {
//   const projects = [
//     {
//       img: Image1Img,
//       title: 'Live Bus Stop App',
//       link: 'https://indianapolis-bus-stop-project.onrender.com/',
//     },
//     {
//       img: Image2Img,
//       title: 'Form Pages App',
//       link: 'https://github.com/JoeR0814/contactform',
//     },
//     {
//       img: Image3Img,
//       title: 'Guess The Number Terminal ',
//       link: 'https://github.com/uprighted-learners/guess-the-number-JoeR0814-1',
//     },
//     {
//       img: Image4Img,
//       title: 'Text Adventure App',
//       link: 'https://github.com/uprighted-learners/zorkington-JoeR0814-1',
//     },
//     {
//       img: Image5Img,
//       title: 'Jeopardy Game App',
//       link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
//     },
//     {
//       img: Image6Img,
//       title: 'To Do List App',
//       link: 'https://github.com/uprighted-learners/personal-to-do-list-JoeR0814',
//     },
//   ];

//   return (
//     <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//       <h1 className='text-4xl pb-4 m-2 mb-3 font-bold text-center text-[#001b5e]'>
//         Projects
//       </h1>
//       <p className='text-2xl font-bold text-center text-[#001b5e]'>
//         Projects Built with Full Stack HTML, CSS, JavaScript, and the MERN Stack
//         Additional Projects Using Vite.js & Tailwind CSS
//       </p>
//       <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-10'>
//         <p className='pb-3'>
//           <b>Indianapolis Volenteer Project Web Application</b> | Capstone group
//           project to provide a way for locals in Indianapolis to sponsor a bus
//           stop to look after and clean it. Highlight skills: Git | React |
//           Reactstrap | Express| Postman | MySQL | JavaScript | CSS3 | HTML5 |
//           Agile | CI/CD | React-Leaflet
//         </p>
//         <p className='pb-3 pt-3'>
//           <b>A Contact Form Web Application</b> | Developed a versatile Contact
//           Form web application that users can use to submit their contact
//           information. Git | Vite | Tailwind CSS | JavaScript | CI/CD
//         </p>
//         <p className='pb-3 pt-3'>
//           <b>A Text Adventure Terminal Console Game</b> | Developed an engaging
//           console-based text adventure game where players navigate through
//           different rooms by answering questions correctly. Each room requires
//           the player to enter specific words as answers to progress, creating an
//           interactive and challenging experience.. Highlight skills: JavaScript
//           | Git | Agile | CI/CD
//         </p>
//         <p className='pb-3 pt-3'>
//           <b>Guess The Number Terminal Console Game</b> | Console game where
//           users can guess the computers number or they can pick a number and the
//           computer tries to guess it. Highlight skills: JavaScript | Git | Agile
//           | CI/CD
//         </p>
//         <p className='pb-3 pt-3'>
//           <b>Jeopardy Game Application</b> | Developed a Jeopardy board game web
//           application using HTML, CSS, and JavaScript. Implemented game logic,
//           question display, player score tracking, and user interaction
//           features. features. Highlight Skills: Javascript | CSS | HTML | Git |
//           Agile | CI/CD
//         </p>
//         <p className='pb-3 pt-3'>
//           <b>A To Do List Web Application</b> | Developed a comprehensive Home
//           To-Do List application where users can create and manage their own
//           lists of tasks. The app allows users to organize tasks in various
//           categories such as home, outside the home, garage, and grocery
//           section. Users can easily save, edit, and delete tasks as needed,
//           ensuring efficient task management and completion. Highlight skills:
//           Git | Vite | Tailwind CSS | JavaScript | CI/CD
//         </p>
//       </div>
//       <div className='grid sm:grid-cols-2 gap-12 '>
//         {projects.map((project, index) => (
//           <ProjectItem
//             key={index}
//             img={project.img}
//             title={project.title}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import ProjectItem from './ProjectItem';
import Image1Img from '../assets/busStopProject.png';
import Image2Img from '../assets/formPages.png';
import Image3Img from '../assets/guessTheNumber.png';
import Image4Img from '../assets/textAdventureGame.png';
import Image5Img from '../assets/jeopardyGame.png';
import Image6Img from '../assets/personalToDoList.png';

const Projects = () => {
  const projects = [
    {
      img: Image1Img,
      title: 'Live Bus Stop App',
      link: 'https://indianapolis-bus-stop-project.onrender.com/',
    },
    {
      img: Image2Img,
      title: 'Form Pages App',
      link: 'https://github.com/JoeR0814/contactform',
    },
    {
      img: Image3Img,
      title: 'Guess The Number Terminal ',
      link: 'https://github.com/uprighted-learners/guess-the-number-JoeR0814-1',
    },
    {
      img: Image4Img,
      title: 'Text Adventure App',
      link: 'https://github.com/uprighted-learners/zorkington-JoeR0814-1',
    },
    {
      img: Image5Img,
      title: 'Jeopardy Game App',
      link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
    },
    {
      img: Image6Img,
      title: 'To Do List App',
      link: 'https://github.com/uprighted-learners/personal-to-do-list-JoeR0814',
    },
  ];

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-3xl sm:text-4xl pb-4 m-2 mb-3 font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-lg sm:text-2xl font-bold text-center text-[#001b5e]'>
        Projects Built with Full Stack HTML, CSS, JavaScript, and the MERN Stack
        Additional Projects Using Vite.js & Tailwind CSS
      </p>
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-10'>
        <p className='text-sm sm:text-base pb-3'>
          <b>Indianapolis Volenteer Project Web Application</b> | Capstone group
          project to provide a way for locals in Indianapolis to sponsor a bus
          stop to look after and clean it. Highlight skills: Git | React |
          Reactstrap | Express| Postman | MySQL | JavaScript | CSS3 | HTML5 |
          Agile | CI/CD | React-Leaflet
        </p>
        <p className='text-sm sm:text-base pb-3 pt-3'>
          <b>A Contact Form Web Application</b> | Developed a versatile Contact
          Form web application that users can use to submit their contact
          information. Git | Vite | Tailwind CSS | JavaScript | CI/CD
        </p>
        <p className='text-sm sm:text-base pb-3 pt-3'>
          <b>A Text Adventure Terminal Console Game</b> | Developed an engaging
          console-based text adventure game where players navigate through
          different rooms by answering questions correctly. Each room requires
          the player to enter specific words as answers to progress, creating an
          interactive and challenging experience.. Highlight skills: JavaScript
          | Git | Agile | CI/CD
        </p>
        <p className='text-sm sm:text-base pb-3 pt-3'>
          <b>Guess The Number Terminal Console Game</b> | Console game where
          users can guess the computers number or they can pick a number and the
          computer tries to guess it. Highlight skills: JavaScript | Git | Agile
          | CI/CD
        </p>
        <p className='text-sm sm:text-base pb-3 pt-3'>
          <b>Jeopardy Game Application</b> | Developed a Jeopardy board game web
          application using HTML, CSS, and JavaScript. Implemented game logic,
          question display, player score tracking, and user interaction
          features. features. Highlight Skills: Javascript | CSS | HTML | Git |
          Agile | CI/CD
        </p>
        <p className='text-sm sm:text-base pb-3 pt-3'>
          <b>A To Do List Web Application</b> | Developed a comprehensive Home
          To-Do List application where users can create and manage their own
          lists of tasks. The app allows users to organize tasks in various
          categories such as home, outside the home, garage, and grocery
          section. Users can easily save, edit, and delete tasks as needed,
          ensuring efficient task management and completion. Highlight skills:
          Git | Vite | Tailwind CSS | JavaScript | CI/CD
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12'>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            link={project.link}
            className='w-full max-w-[150px] sm:max-w-none mx-auto'
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
