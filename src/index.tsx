import { hydrate, prerender as ssr } from 'preact-iso';

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {
	return (
		<div>
			<h1>Avril</h1>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
