import { useEffect, useRef, useState } from 'react';
import './Editor.scss';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';
import { ZoomInOutlined, ZoomOutOutlined } from '@mui/icons-material';
import { Resizable } from '../Resizable';

export const Editor = () => {
	const [code, setCode] = useState('console.log("Hello World!");');
	const [fontSize, setFontSize] = useState(13);
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const CustomTheme = EditorView.theme({
			'&': {
				fontSize: `${fontSize}pt`,
			},
			'.cm-content': {
				fontFamily: 'Source Code Pro, Nunito, Raleway, monospace',
				fontWeight: 500,
			},
		});

		const onUpdate = EditorView.updateListener.of((value) => {
			setCode(value.state.doc.toString());
		});

		const editorStartState = EditorState.create({
			doc: code, // creates a default hello world language
			extensions: [
				basicSetup,
				keymap.of([indentWithTab]),
				oneDark,
				[CustomTheme],
				javascript({ jsx: true, typescript: true }),
				onUpdate,
			],
		});

		const editorView = new EditorView({
			state: editorStartState,
			parent: editorRef.current as HTMLElement,
		});

		return () => {
			editorView.destroy();
		};
	}, [fontSize]);

	return (
		<>
			<Resizable direction='vertical'>
				<div
					ref={editorRef}
					style={{
						height: 'calc(100% - 10px)',
					}}
					className='relative h-full'
				>
					<div className='absolute bottom-1 right-1 z-10 w-auto'>
						<button
							onClick={() => setFontSize((prev) => prev + 1)}
							className='px-2 py-0.5 mr-0.5 rounded-l-lg bg-teal-300 text-center opacity-30 hover:bg-teal-500 hover:opacity-100'
						>
							<span className='text-white text-md font-semibold'>
								<ZoomInOutlined />
							</span>
						</button>
						<button
							onClick={() => setFontSize((prev) => prev - 1)}
							className='px-2 py-0.5 rounded-r-lg bg-teal-300 text-center opacity-30 hover:bg-teal-500 hover:opacity-100'
						>
							<span className='text-white text-md font-semibold'>
								<ZoomOutOutlined />
							</span>
						</button>
					</div>
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
