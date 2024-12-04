import PortWorkItem from './PortWorkItem';

const data = [
	{
		year: 2010,
		title: 'Construction',
		duration: '5 years',
		details:
			'Worked on new and old commercial/residential construction projects, highway road paving, and bridge construction work on old and new bridges.',
	},
	{
		year: 2016,
		title: 'Movie/TV Studio Industry',
		duration: '4 years (2015-2019)',
		details:
			'Worked on TV shows such as American Horror Story (seasons 7 & 9), 9-1-1 (seasons 1 & 2), and This Is Us. I was the location manager for 9-1-1, responsible for logistics at each location to build sets and scenes. Worked at Fox Studios, Paramount Studio, Warner Brothers, and Disney Studio among others.',
	},
	{
		year: 2020,
		title: 'Reis Transportation',
		duration: '2 years (2020-2022)',
		details:
			'Started my own hauling business, transporting general goods with my own truck and 30-foot gooseneck trailer up and down the east coast.',
	},
	{
		year: 2023,
		title: 'Handyman and Education for Full Stack Software Web Development',
		duration: '2 years (2022-2024)',
		details:
			'In 2019, I got married and now have a son. Wanting to stay close to home, I chose to stop hauling and took up handy work while deciding my next steps. By the end of 2023, I decided to pursue a career in web development. In January 2024, I enrolled in Goodwin College in Hartford,Connecticut, to become a Full Stack Web Developer. I attended a bootcamp by UpRight Education, where I learned JavaScript and the MERN stack. I graduated in July 2024, having gained extensive knowledge and skills. I am excited to continue learning and working in the field of web development.',
	},
];

const PortWork = () => {
	return (
		<div id='work' className='max-w-[1040px] m-auto md:pl-20'>
			<h1 className='text-4xl font-bold text-center py-5 text-[#001b5e]'>Work</h1>
			{data.map((item, idx) => (
				<PortWorkItem
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

export default PortWork;

