import React from 'react';
import WorkItem from './WorkItem.jsx';

const data = [
  {
    year: 2019,
    title: 'Service Adviser - REI Vermont',
    duration: '2 years',
    details:
      'Supported daily operations of the bicycle and ski service department, shop organization, and scheduling. Offered expert advice to customers on gear selection, maintenance, and usage, while ensuring all repairs met stringent quality control standards for skis and bikes. Specialized in diagnosing and repairing various bicycle issues, covering drivetrain, suspension, and electrical systems',
  },
  {
    year: 2024,
    title: 'Software Development Certification - Upright Education',
    duration: '6 months',
    details:
      'Community College of Vermont Full stack technical boot camp focusing on front end web development technologies',
  },
  {
    year: 2024,
    title: 'Software Development Certification - Upright Education',
    duration: '6 months',
    details:
      'Community College of Vermont Full stack technical boot camp focusing on front end web development technologies',
  },
  {
    year: 2024,
    title: 'Software Development Certification - Upright Education',
    duration: '6 months',
    details:
      'Community College of Vermont Full stack technical boot camp focusing on front end web development technologies',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

