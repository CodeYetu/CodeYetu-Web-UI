import './Selector.sass';

export const Selector = () => {
	const languages = [
		{ name: 'C', code: 'c' },
		{ name: 'C++', code: 'cpp' },
		{ name: 'C#', code: 'cs' },
		{ name: 'Java', code: 'java' },
		{ name: 'JavaScript', code: 'js' },
		{ name: 'Python', code: 'py' },
		{ name: 'TypeScript', code: 'ts' },
		{ name: 'Ruby', code: 'rb' },
	];

	return (
		<select
			name='language'
			id='langselect'
			className='appearance-none m-0 px-4 py-0 text-lg font-normal text-white bg-inherit bg-clip-padding bg-no-repeat border-b-2 border-solid border-white focus:outline-none'
		>
			<option value='' selected>
				Select Language
			</option>
			{languages.map((lang, idx) => (
				<option key={idx} value={lang.code}>
					{lang.name}
				</option>
			))}
		</select>
	);
};
