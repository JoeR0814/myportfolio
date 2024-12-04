import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

function PortNavbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	// Close the menu when a link is clicked
	const handleCloseNav = () => {
		setNav(false);
	};

	return (
		<div>
			{/* Menu Icon */}
			<AiOutlineMenu
				className='fixed top-4 left-4 z-50 md:hidden cursor-pointer text-3xl text-white bg-orange-500 rounded-full p-1 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out'
				onClick={handleNav}
				aria-label='Open navigation menu'
			/>

			{/* Mobile Menu */}
			{nav ? (
				<div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
					<a
						href='#main'
						className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
						aria-label='Go to Home'
						onClick={handleCloseNav}
					>
						<AiOutlineHome size={20} />
						<span className='pl-4'>Home</span>
					</a>
					<a
						href='#about'
						className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
						aria-label='Go to About'
						onClick={handleCloseNav}
					>
						<BsPerson size={20} />
						<span className='pl-4'>About</span>
					</a>
					<a
						href='#work'
						className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
						aria-label='Go to Work'
						onClick={handleCloseNav}
					>
						<GrProjects size={20} />
						<span className='pl-4'>Work</span>
					</a>
					<a
						href='#projects'
						className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
						aria-label='Go to Projects'
						onClick={handleCloseNav}
					>
						<AiOutlineProject size={20} />
						<span className='pl-4'>Projects</span>
					</a>
					<a
						href='#contact'
						className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
						aria-label='Go to Contact'
						onClick={handleCloseNav}
					>
						<AiOutlineMail size={20} />
						<span className='pl-4'>Contact</span>
					</a>
				</div>
			) : null}

			{/* Desktop Menu */}
			<div className='md:block hidden fixed top-[25%] z-10'>
				<div className='flex flex-col'>
					<a
						href='#main'
						className='rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
						aria-label='Go to Home'
					>
						<AiOutlineHome size={20} />
					</a>
					<a
						href='#about'
						className='rounded-full shadow-lg bg-gray-100 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
						aria-label='Go to About'
					>
						<BsPerson size={20} />
					</a>
					<a
						href='#work'
						className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
						aria-label='Go to Work'
					>
						<GrProjects size={20} />
					</a>
					<a
						href='#projects'
						className='rounded-full shadow-lg bg-gray-100 shadow-blue-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
						aria-label='Go to Projects'
					>
						<AiOutlineProject size={20} />
					</a>
					<a
						href='#contact'
						className='rounded-full shadow-lg bg-gray-100 shadow-blue-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
						aria-label='Go to Contact'
					>
						<AiOutlineMail size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default PortNavbar;

