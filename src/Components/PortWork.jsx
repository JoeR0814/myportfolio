import PortWorkItem from './PortWorkItem';

const data = [
	{
		year: 2024,
		title: 'Full Stack Software Web Development',
		duration: '1 years (2023-2024)',
		details:
			'In October 2023, I made the pivotal decision to change careers and pursue my passion for software development. I enrolled in Goodwin University’s in 2024 as a Full Stack Web Development program, where I gained comprehensive skills in front-end and back-end development. After completing the program and becoming a certified software developer in just six months, I have been dedicating my time to building my portfolio and working on personal projects to further develop my expertise and prepare for this exciting career transition.',
	},
	{
		year: 2020,
		title: 'Reis Transportation',
		duration: '2 years (2020-2022)',
		details:
			' I started my own hauling business. Using my truck and a 30-foot gooseneck trailer, I transported general goods up and down the East Coast. This experience allowed me to develop strong organizational skills, time management, and the ability to navigate complex logistics while running a successful operation.',
	},
	{
		year: 2016,
		title: 'Movie/TV Studio Industry',
		duration: '4 years (2015-2019)',
		details:
			'I worked on major TV shows, including American Horror Story (Seasons 7 & 9), 9-1-1 (Seasons 1 & 2), and This Is Us. As the location manager for 9-1-1, I was responsible for coordinating logistics at filming locations, ensuring seamless set and scene construction. My experience also includes working at renowned studios such as Fox Studios, Paramount Studios, Warner Brothers, and Disney Studios, where I honed my skills in organization, communication, and problem-solving within high-pressure environments.',
	},
	{
		year: 2010,
		title: 'Construction',
		duration: '5 years',
		details:
			'"In 2010, I began my career in construction, gaining hands-on experience in both commercial and residential projects. My work included new builds, renovations, highway road paving, and bridge construction on both new and existing structures. This role allowed me to develop a strong foundation in project management, teamwork, and problem-solving while contributing to diverse and challenging construction projects.',
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

