function PortProjectItem({ img, title, link }) {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-red-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
			<img src={img} alt={'/Project image'} className='rounded-xl group-hover:opacity-10 h-full' />
			<div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
				<p className='pb-4 pt-2 text-white text-center'></p>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					<p className='text-center rounded- bg-white text-gray-700 font-bold text-lg cursor-pointer'>
						for more Info
					</p>
				</a>
			</div>
		</div>
	);
}

export default PortProjectItem;

