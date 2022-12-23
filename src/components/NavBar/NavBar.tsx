import { PlayArrowOutlined } from '@mui/icons-material';
import './NavBar.sass';

export const NavBar = () => {
	return (
		<div className='flex justify-between align-middle items-center w-full bg-teal-400 text-white px-4 py-2'>
			<select
				name='language'
				id='langselect'
				className='appearance-none m-0 px-4 py-0 text-lg font-normal text-white bg-inherit bg-clip-padding bg-no-repeat border-b-2 border-solid border-gray-200 focus:outline-none'
			>
				<option value='' selected>
					Select Language
				</option>
			</select>
			<h5 className='font-bold text-2xl'>
				<span className='mr-1'>{'</>'}</span>CodeYetu
			</h5>
			<button className='px-2 py-1 h-10 rounded-lg bg-red-400 text-white'>
				Run <PlayArrowOutlined />
			</button>
		</div>
	);
};
