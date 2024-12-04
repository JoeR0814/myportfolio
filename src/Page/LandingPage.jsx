import MyLogo from '../assets/my-banner-logo.webp';
import Img2 from '../assets/profilePic.jpg';
import LandingPageNav from '../Components/LandingPageNav';

function LandingPage() {
	return (
		<>
			<LandingPageNav />
			<div className='flex flex-col md:flex-row justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-400 via-blue-300 to-gray-300 text-white pt-12 pb-12 border-4 border-gray-400'>
				<h1 className='text-center text-2xl md:text-4xl font-bold underline rounded-lg text-white shadow-lg py-4 px-6 border-4 border-gray-400 bg-gradient-to-r from-blue-300 via-blue-300 to-gray-400 pt-12 pb-12 '>
					Welcome To
				</h1>
				<img
					className='w-96 h-60 mt-6 mb-6 rounded-lg shadow-lg border-4 border-gray-400 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'
					src={MyLogo}
					alt='Joe Reis Logo'
				/>
				<p className='font-bold underline text-2xl md:text-3xl text-center p-4 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 text-white pt-12 pb-12 '>
					Website!
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-blue-200 via-gray-400 to-blue-200 text-white pt-12 pb-12 border-4  border-gray-400  '>
				<img
					className='w-40 h-40 md:w-48 md:h-48 mt-6 p-4 rounded-full shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 '
					src={Img2}
					alt="Joe's Face"
				/>
				<p className='font-bold text-white text-400 text-md md:text-md text-center w-full md:w-1/2 p-6 rounded-lg mt-4 md:mt-0 shadow-lg border-4  border-gray-300 bg-gradient-to-r from-blue-300 via-gray-300 to-blue-300 pt-12 pb-12 '>
					Hi, I’m Joe, a passionate web developer specializing in creating custom websites that work
					for you. Whether you're looking to build your dream website or refresh your current one,
					I’ll work alongside you to bring your vision to life.
				</p>
			</div>
		</>
	);
}

export default LandingPage;

