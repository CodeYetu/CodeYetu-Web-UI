import { FC, ReactNode } from 'react';

interface WindowProps {
	title: string;
	style?: React.CSSProperties;
	children?: ReactNode;
}

export const StdIOWindow: FC<WindowProps> = ({ title, style, children }) => {
	return (
		<div
			className='h-full overflow-hidden flex-grow text-gray-200'
			style={style}
		>
			<div className='p-2 w-full h-full'>
				<h4 className='mb-2 text-center font-semibold text-lg'>{title}</h4>
				<hr className='border-0 border-b-2 border-dashed border-b-gray-400' />
				{children}
			</div>
		</div>
	);
};
