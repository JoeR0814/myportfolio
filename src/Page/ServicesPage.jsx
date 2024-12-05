import React from 'react';
import Img4 from '../assets/certificate.jpeg';
import { TypeAnimation } from 'react-type-animation';

const ServicesPage = () => {
	return (
		<>
			<header className=' flex-col md:flex-row justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white pt-12 pb-12 border-4 border-gray-400'>
				<h1 className='text-center text-2xl md:text-4xl font-bold underline rounded-lg text-white shadow-lg py-4 px-6 border-4 border-gray-400 bg-gradient-to-r from-blue-300 via-blue-300 to-gray-400 pt-12 pb-12 '>
					Let's Build Your Website Together
				</h1>
				<TypeAnimation
					sequence={[
						'WEB DESIGNER',
						2000,
						'ANIMATION',
						2000,
						'DEPLOYMENT',
						2000,
						'TEAM PLAYER',
						2000,
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
				<p className='font-bold text-sm md:text-sm text-center p-4 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 text-white pt-12 pb-12 '>
					Welcome! I am excited to offer a wide range of services to help your website meet your
					needs. With a strong foundation in both frontend and backend development, I specialize in
					creating user-friendly designs and secure, efficient functionality. Whether you need a
					simple site or a platform with user login systems, password management, and payment
					processing, I have the expertise to make it happen. I am a certified software developer,
					having earned my certification from Goodwin University, and I am committed to delivering
					excellence. (Feel free to check out my certificate on this page!) When you choose me,
					you’re not just hiring a web developer—you’re gaining a collaborative partner. I’ll work
					closely with you every step of the way to ensure your website reflects your vision and
					exceeds your expectations. Let’s create something extraordinary together!
				</p>
				<img
					className=' md:flex-row justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 text-white pt-12 pb-12 border-4 border-white'
					src={Img4}
					alt='Certificate showcasing my credentials'
				/>
			</header>
			<section className='services'>
				<h2>My Services</h2>
				<div>
					<h3>Custom Website Development</h3>
					<p>
						Let me help you build a fully customized website designed to match your unique vision
						and brand identity. Whether you're looking for a personalized design or need a secure
						backend with user login systems and payment options, I can create a seamless experience
						that meets both your aesthetic and functional requirements.
					</p>
				</div>
				<div>
					<h3>SEO - "Search Engine Optimization"</h3>
					<p>
						Enhance your website's visibility and drive targeted traffic by implementing effective
						SEO strategies. As the developer of your site, I’ll ensure your content is optimized
						with relevant keywords and best practices, helping your site rank higher on search
						engines and reach the right audience.
					</p>
				</div>
				<div>
					<h3>Domain Name & Deployment</h3>
					<p>
						If you need assistance selecting the perfect domain name for your website, I’ll be happy
						to guide you in the right direction. Additionally, if you’re unsure about which hosting
						service to use, I’m here to help you choose the best option and deploy your site
						seamlessly..
					</p>
				</div>
				<div>
					<h3>Updates, Bug Fixes, and Maintenance</h3>
					<p>
						Whether you have an existing website that needs updates, fixes, or a complete redesign,
						I’m here to help. If I built your website in the past, I’ll gladly provide ongoing
						updates and improvements at a fair and reasonable price. My goal is to ensure your
						website remains up-to-date, functional, and aligned with your vision.
					</p>
				</div>
			</section>
		</>
	);
};
export default ServicesPage;

