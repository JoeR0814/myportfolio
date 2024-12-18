function PortContact() {
	return (
		<div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
			<h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
			<form action='https://getform.io/f/awngrwkb' method='POST' encType='multipart/form-data'>
				<div className='flex flex-col'>
					<label className='uppercase text-sm py-2'>name</label>
					<input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
				</div>
				<div className='flex flex-col py-2'>
					<label className='uppercase text-sm py-2'>Email</label>
					<input
						className='border-2 rounded-lg p-3 flex border-gray-300'
						type='email'
						name='name'
					/>
				</div>
				<div className='flex flex-col py-2'>
					<labe className='uppercase text-sm py-2'>Subject</labe>
					<input
						className='border-2 rounded-lg p-3 flex border-gray-300'
						type='text'
						name='subject'
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label className='uppercase text-sm py-2'>Message</label>
					<textarea
						className='border-2 rounded-lg p-3 border-gray-300'
						rows='10'
						name='message'
					></textarea>
				</div>
				<button className='bg-[#001b5e] w-full p-4 text-gray-100 mt-4 rounded-lg'>
					Send Message
				</button>
			</form>
		</div>
	);
}

export default PortContact;

