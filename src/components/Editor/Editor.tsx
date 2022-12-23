import { useEffect, useRef, useState } from 'react';
import './Editor.scss';
import { Resizable } from '../Resizable';
import { CodeEditor } from './CodeEditor';
import { StdIOWindow } from '../StdIOWindow';

export const Editor = () => {
	return (
		<>
			<Resizable direction='vertical'>
				<CodeEditor />
			</Resizable>
			<div className='flex flex-grow bg-gray-800 h-0'>
				<Resizable direction='horizontal'>
					<StdIOWindow title='stdin'>
						<textarea
							name=''
							id=''
							className='p-2 h-full w-full outline-none rounded bg-inherit'
						></textarea>
					</StdIOWindow>
				</Resizable>
				<StdIOWindow title='stdout' />
			</div>
		</>
	);
};
