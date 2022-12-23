import { useEffect, useRef, useState } from 'react';
import './Editor.scss';
import { Resizable } from '../Resizable';
import { CodeEditor } from './CodeEditor';

export const Editor = () => {
	return (
		<>
			<Resizable direction='vertical'>
				<div
					style={{
						height: 'calc(100% - 10px)',
					}}
					className='relative h-full'
				>
					<CodeEditor />
				</div>
			</Resizable>
			<div className='flex flex-grow bg-gray-800 h-0'>
				<Resizable direction='horizontal'>
					<div
						className='relative h-full overflow-hidden text-white'
						style={{ width: 'calc(100% - 5px)' }}
					>
						<div className='p-2 w-full h-full'>
							<h4 className='mb-2 text-center font-semibold text-lg'>Input</h4>
							<hr className='border-0 border-b-2 border-dashed border-b-gray-400' />
							<textarea
								name=''
								id=''
								className='p-2 h-full w-full outline-none rounded bg-inherit'
							></textarea>
						</div>
					</div>
				</Resizable>
				<div className='relative h-full overflow-hidden flex-grow text-gray-200'>
					<div className='p-2'>
						<h4 className='mb-2 text-center font-semibold text-lg'>Output</h4>
						<hr className='border-0 border-b-2 border-dashed border-b-gray-400' />
					</div>
				</div>
			</div>
		</>
	);
};
