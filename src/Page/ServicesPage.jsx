// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import Img4 from '../assets/certificate.jpeg';

// export default function Services() {
// 	return (
// 		<>
// 			{/* Header Section */}
// 			<div className='flex flex-col justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-12 border-b-4 border-gray-400'>
// 				<motion.h1
// 					className='text-center text-4xl font-bold underline rounded-lg text-white shadow-lg py-4 px-6 border-4 border-gray-400 bg-gradient-to-r from-blue-300 via-blue-300 to-gray-400'
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ duration: 0.5 }}
// 				>
// 					Let's Build Your Website Together
// 				</motion.h1>

// 				<TypeAnimation
// 					sequence={['WEB DESIGNER', 1000, 'FRIEND', 1000, 'DEVELOPER', 1000]}
// 					wrapper='div'
// 					cursor={true}
// 					repeat={Infinity}
// 					style={{
// 						fontSize: '1.5em',
// 						color: 'white',
// 						fontWeight: 'bold',
// 						fontStyle: 'italic',
// 						marginTop: '20px',
// 					}}
// 				/>

// 				<p className='text-sm md:text-base text-center mt-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 p-6'>
// 					Welcome! I offer a range of services to ensure your website is tailored to your needs.
// 					From user-friendly designs to secure backend functionality, including user logins and
// 					payment systems, I’ve got you covered. As a certified software developer, I’m committed to
// 					excellence and working closely with you to create a site that exceeds expectations. Let’s
// 					make your vision a reality!
// 				</p>

// 				<img
// 					className='mt-8 max-w-xs md:max-w-md rounded-lg shadow-lg border-4 border-white'
// 					src={Img4}
// 					alt='Certificate showcasing my credentials'
// 				/>
// 			</div>

// 			{/* Services Section */}
// 			<section className='px-6 md:px-32 py-12'>
// 				<h2 className='text-center text-4xl font-bold underline mb-12 bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-4 px-6 rounded-lg shadow-lg'>
// 					Here Are My Services
// 				</h2>

// 				{/* Custom Website Development */}
// 				<div className='mb-8 p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'>
// 					<h3 className='text-2xl font-bold underline text-white mb-4'>
// 						Custom Website Development
// 					</h3>
// 					<p>
// 						Let me help you build a fully customized website designed to match your unique vision
// 						and brand identity. From personalized designs to secure backend functionality with user
// 						login systems and payment processing, I’ll create a seamless and functional experience
// 						tailored to your needs.
// 					</p>
// 				</div>

// 				{/* SEO Optimization */}
// 				<div className='mb-8 p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'>
// 					<h3 className='text-2xl font-bold underline text-white mb-4'>
// 						SEO - "Search Engine Optimization"
// 					</h3>
// 					<p>
// 						Enhance your website's visibility and drive targeted traffic by implementing effective
// 						SEO strategies. As the developer of your site, I’ll ensure your content is optimized
// 						with relevant keywords to help your site rank higher and reach the right audience.
// 					</p>
// 				</div>

// 				{/* Domain Name & Deployment */}
// 				<div className='mb-8 p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'>
// 					<h3 className='text-2xl font-bold underline text-white mb-4'>Domain Name & Deployment</h3>
// 					<p>
// 						Need help picking the perfect domain name or choosing a hosting service? I’ll guide you
// 						through the process and deploy your website seamlessly to ensure it’s live and
// 						accessible to your audience.
// 					</p>
// 				</div>

// 				{/* Updates, Bug Fixes, and Maintenance */}
// 				<div className='p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'>
// 					<h3 className='text-2xl font-bold underline text-white mb-4'>
// 						Updates, Bug Fixes, and Maintenance
// 					</h3>
// 					<p>
// 						Have an existing website that needs updates, fixes, or a complete redesign? I’m here to
// 						help. If I built your site in the past, I’ll provide updates and improvements at a fair
// 						price to ensure it stays functional and aligned with your vision.
// 					</p>
// 				</div>
// 			</section>
// 		</>
// 	);
// }

// import React, { useState } from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import Img4 from '../assets/certificate.jpeg';

// const skills = [
// 	{
// 		title: 'Custom Website Development',
// 		content:
// 			'Let me help you build a fully customized website designed to match your unique vision and brand identity. From personalized designs to secure backend functionality with user login systems and payment processing, I’ll create a seamless and functional experience tailored to your needs.',
// 	},
// 	{
// 		title: 'SEO - "Search Engine Optimization"',
// 		content:
// 			"Enhance your website's visibility and drive targeted traffic by implementing effective SEO strategies. As the developer of your site, I’ll ensure your content is optimized with relevant keywords to help your site rank higher and reach the right audience.",
// 	},
// 	{
// 		title: 'Domain Name & Deployment',
// 		content:
// 			'Need help picking the perfect domain name or choosing a hosting service? I’ll guide you through the process and deploy your website seamlessly to ensure it’s live and accessible to your audience.',
// 	},
// 	{
// 		title: 'Updates, Bug Fixes, and Maintenance',
// 		content:
// 			'Have an existing website that needs updates, fixes, or a complete redesign? I’m here to help. If I built your site in the past, I’ll provide updates and improvements at a fair price to ensure it stays functional and aligned with your vision.',
// 	},
// ];

// // Animation Variants
// const serviceAnimation = {
// 	hidden: { opacity: 0, x: -100 },
// 	visible: { opacity: 1, x: 0 },
// };

// export default function Services() {
// 	return (
// 		<>
// 			{/* Header Section */}
// 			<div className='flex flex-col justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-12 border-b-4 border-gray-400'>
// 				<motion.h1
// 					className='text-center text-4xl font-bold underline rounded-lg text-white shadow-lg py-4 px-6 border-4 border-gray-400 bg-gradient-to-r from-blue-300 via-blue-300 to-gray-400'
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ duration: 3 }}
// 				>
// 					Let's Build A Website Together
// 				</motion.h1>

// 				<TypeAnimation
// 					sequence={['FUN THINGS', 1000, 'I CAN DO', 1000, 'AS A DEVELOPER', 1000]}
// 					wrapper='div'
// 					cursor={true}
// 					repeat={Infinity}
// 					style={{
// 						fontSize: '1.5em',
// 						color: 'white',
// 						fontWeight: 'bold',
// 						fontStyle: 'italic',
// 						marginTop: '20px',
// 					}}
// 				/>

// 				<p className='text-sm md:text-base text-center mt-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 p-6'>
// 					Welcome! I offer a range of services to ensure your website is tailored to your needs.
// 					From user-friendly designs to secure backend functionality, including user logins and
// 					payment systems, I’ve got you covered. As a certified software developer, I’m committed to
// 					excellence and working closely with you to create a site that exceeds expectations. Let’s
// 					make your vision a reality!
// 				</p>

// 				<img
// 					className='mt-8 max-w-xs md:max-w-md rounded-lg shadow-lg border-4 border-white'
// 					src={Img4}
// 					alt='Certificate showcasing my credentials'
// 				/>
// 			</div>

// 			{/* Services Section */}
// 			<section className='px-6 md:px-32 py-12'>
// 				<h2 className='text-center text-4xl font-bold underline mb-12 bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-4 px-6 rounded-lg shadow-lg'>
// 					Here Are My Services
// 				</h2>

// 				{/* Render Skills */}
// 				{skills.map((skill, index) => (
// 					<motion.div
// 						key={index}
// 						className='mb-8 p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'
// 						initial='hidden'
// 						animate='visible'
// 						variants={serviceAnimation}
// 						transition={{ duration: 0.5, delay: index * 0.2 }}
// 					>
// 						<h3 className='text-2xl font-bold underline text-white mb-4'>{skill.title}</h3>
// 						<p>{skill.content}</p>
// 					</motion.div>
// 				))}
// 			</section>
// 		</>
// 	);
// }

import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import Img4 from '../assets/certificate.jpeg';

export default function Services() {
	// Data for services
	const services = [
		{
			id: 'customWebsite',
			title: 'Custom Website Development',
			content:
				'Let me help you build a fully customized website designed to match your unique vision and brand identity. From personalized designs to secure backend functionality with user login systems and payment processing, I’ll create a seamless and functional experience tailored to your needs.',
		},
		{
			id: 'seo',
			title: 'SEO - "Search Engine Optimization"',
			content:
				'Enhance your website’s visibility and drive targeted traffic by implementing effective SEO strategies. As the developer of your site, I’ll ensure your content is optimized with relevant keywords to help your site rank higher and reach the right audience.',
		},
		{
			id: 'domainDeployment',
			title: 'Domain Name & Deployment',
			content:
				'Need help picking the perfect domain name or choosing a hosting service? I’ll guide you through the process and deploy your website seamlessly to ensure it’s live and accessible to your audience.',
		},
		{
			id: 'updatesMaintenance',
			title: 'Updates, Bug Fixes, and Maintenance',
			content:
				'Have an existing website that needs updates, fixes, or a complete redesign? I’m here to help. If I built your site in the past, I’ll provide updates and improvements at a fair price to ensure it stays functional and aligned with your vision.',
		},
	];

	// State to track which sections are visible
	const [isVisible, setIsVisible] = useState({});
	const sectionRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible((prev) => ({
							...prev,
							[entry.target.id]: true,
						}));
					}
				});
			},
			{ threshold: 0.2 },
		);

		// Observe all sections
		sectionRefs.current.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	const fadeInVariant = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<>
			{/* Header Section */}
			<div className='flex flex-col justify-center items-center px-6 md:px-32 w-full bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-12 border-b-4 border-gray-400'>
				<motion.h1
					className='text-center text-4xl font-bold underline rounded-lg text-white shadow-lg py-4 px-6 border-4 border-gray-400 bg-gradient-to-r from-blue-300 via-blue-300 to-gray-400'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				>
					Let's Build A Website Together
				</motion.h1>

				<TypeAnimation
					sequence={['WEB DEVELOPER', 1000, 'UI/UX DESIGNER ', 1000, 'FULL STACK DEVELOPER', 1000]}
					wrapper='div'
					cursor={true}
					repeat={Infinity}
					style={{
						fontSize: '1.5em',
						color: 'white',
						fontWeight: 'bold',
						fontStyle: 'italic',
						marginTop: '20px',
					}}
				/>

				<p className='text-sm md:text-base text-center mt-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300 p-6'>
					Welcome! I offer a range of services to ensure your website is tailored to your needs.
					From user-friendly designs to secure backend functionality, including user logins and
					payment systems, I’ve got you covered. As a certified software developer, I’m committed to
					excellence and working closely with you to create a site that exceeds expectations. Let’s
					make your vision a reality!
				</p>

				<img
					className='mt-8 max-w-xs md:max-w-md rounded-lg shadow-lg border-4 border-white'
					src={Img4}
					alt='Certificate showcasing my credentials'
				/>
			</div>

			{/* Services Section */}
			<section className='px-6 md:px-32 py-12'>
				<h2 className='text-center text-4xl font-bold underline mb-12 bg-gradient-to-r from-gray-400 via-blue-400 to-gray-300 text-white py-4 px-6 rounded-lg shadow-lg'>
					Here Are My Services
				</h2>

				{/* Service Cards */}
				{services.map(({ id, title, content }, index) => (
					<motion.div
						key={id}
						id={id}
						ref={(el) => (sectionRefs.current[index] = el)}
						variants={fadeInVariant}
						initial='hidden'
						animate={isVisible[id] ? 'visible' : 'hidden'}
						className='mb-8 p-6 rounded-lg shadow-lg border-4 border-gray-300 bg-gradient-to-r from-gray-400 via-blue-300 to-blue-300'
					>
						<h3 className='text-2xl font-bold underline text-white mb-4'>{title}</h3>
						<p>{content}</p>
					</motion.div>
				))}
			</section>
		</>
	);
}

