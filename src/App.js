// Императивный подход
import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// Декларативный подход
const fullYear = new Date().getFullYear();
const codeHtmlEl = createElement('code', null, 'src/App.js');

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement('p', null, 'Edit ', codeHtmlEl, ' and save to reload 2.'),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', null, fullYear),
		),
	);
};
