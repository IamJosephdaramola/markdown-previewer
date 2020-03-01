import React, { useState } from 'react';
import './App.css';

//  create a marked variable
const marked = require('marked');
function App() {
	const [markdown, setMarkdown] = useState(
		'# Markdown Heading\n\nFreeCodecamp is amazing\n-----------\n\n### Paragraphs are separated by a blank line.\n\nThis is super  cool\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n####'
	);

	const updateMarkdown = markdown => {
		setMarkdown(markdown);
	};
	return (
		<div className='App container'>
			<div className='form-group'>
				<h1 className='text-center'>Markdown Input</h1>
				<textarea
					id='editor'
					className='form-control'
					placeholder='enter markdown'
					value={markdown}
					onChange={e => updateMarkdown(e.target.value)}></textarea>
			</div>
			<h1 className='text-center'>Markdown Output</h1>
			<div
				className='bg-dark text-white p-4'
				id='preview'
				dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
		</div>
	);
}

export default App;
