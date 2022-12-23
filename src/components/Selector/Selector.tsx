import { useEffect, useState } from 'react';
import './Selector.sass';
import {
	ExpandLessOutlined,
	ExpandMoreOutlined,
	SearchOutlined,
} from '@mui/icons-material';

interface SelectorOption {
	name: string;
	value: string;
	icon?: string;
}

interface SelectorProps {
	options?: Array<SelectorOption>;
	selected?: string;
}

export const Selector: React.FC<SelectorProps> = ({ options }) => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [selected, setSelected] = useState<SelectorOption>();

	useEffect(() => {
		const index = Math.floor(Math.random() * (options?.length || 0));
		setSelected(options && options[index]);
	}, []);

	return (
		<div className='w-52 font-medium cursor-pointer'>
			<div
				onClick={() => setOpen(!open)}
				className={`bg-inherit w-full flex justify-around items-center border-b-2 border-solid border-b-white relative ${
					!selected && 'text-white'
				}`}
			>
				<p className='py-2'>
					{selected?.name ? (
						selected.name.length > 25 ? (
							`${selected.name.substring(0, 15)}...`
						) : (
							<div className='flex items-center justify-between'>
								{selected.icon && (
									<img src={selected.icon} alt={`${selected.name} icon`} />
								)}
								<p className='text-lg font-semibold'>{selected.name}</p>
							</div>
						)
					) : (
						'Select Language'
					)}
				</p>
				{!open ? <ExpandMoreOutlined /> : <ExpandLessOutlined />}
			</div>
			<ul
				className={`bg-white mt-2 overflow-y-auto rounded absolute top-12 z-10 w-52 text-gray-800  ${
					open ? 'max-h-60' : 'max-h-0'
				}`}
			>
				<>
					<div className='flex items-center px-2 sticky top-0 bg-white text-gray-700'>
						<SearchOutlined />
						<input
							type='text'
							value={search}
							onChange={(e) => setSearch(e.target.value.toLowerCase())}
							placeholder='Enter language'
							className='placeholder:text-gray-500 p-2 outline-none w-full'
						/>
					</div>
					{options?.map((option, idx) => (
						<li
							key={idx}
							className={`p-2 text-sm hover:bg-teal-600 hover:text-white ${
								option.value === selected?.value && 'bg-teal-600 text-white'
							} ${
								option.name.toLowerCase().startsWith(search.toLowerCase())
									? 'block'
									: 'hidden'
							}`}
							onClick={() => {
								if (option.value !== selected?.value) {
									setSelected(option);
									setOpen(false);
									setSearch('');
								}
							}}
						>
							<div className='flex items-center justify-between'>
								{option.icon && (
									<img src={option.icon} alt={`${option.name} icon`} />
								)}
								<p className='text-lg font-semibold'>{option.name}</p>
							</div>
						</li>
					))}
				</>
			</ul>
		</div>
	);
};
