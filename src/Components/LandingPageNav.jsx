import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const LandingPageNav = () => {
	const location = useLocation();
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav(!nav);

	// Navigation links and labels
	const navLinks = [
		{ path: '/', label: 'Home Page' },
		{ path: '/Page/PortfolioPage', label: 'Portfolio' },
	];

	return (
		<div>
			{/* Mobile Menu Toggle */}
			<AiOutlineMenu
				className='fixed top-4 right-2 z-50 md:hidden cursor-pointer text-3xl text-white bg-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out'
				onClick={handleNav}
				aria-label='Toggle Navigation Menu'
			/>

			{/* Mobile Navigation */}
			{nav && (
				<div className='fixed w-full h-screen bg-white/90 flex flex-row justify-center items-center z-20'>
					{navLinks.map((link) => (
						<Link to={link.path} key={link.label} onClick={handleNav}>
							<button
								className={`w-[75%] flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer ${
									location.pathname === link.path
										? 'bg-blue-500 text-white'
										: 'bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'
								}`}
							>
								<span>{link.label}</span>
							</button>
						</Link>
					))}
				</div>
			)}

			{/* Desktop Navigation */}
			<div className='hidden md:flex fixed top-[25%] right-1 flex-col space-y-4 z-10'>
				{navLinks.map((link) => (
					<Link to={link.path} key={link.label}>
						<button
							className={`rounded-full shadow-lg m-1 p-3 cursor-pointer ${
								location.pathname === link.path
									? 'bg-blue-500 text-white'
									: 'bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'
							}`}
						>
							<span>{link.label}</span>
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default LandingPageNav;

