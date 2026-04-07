import { hydrate, prerender as ssr } from 'preact-iso';
import {Status} from './components/status/Status'
import './style.css';

export function App() {
	return (
		<div class={`grid place-content-center gap-8 h-48`}>
			<h1 class="saira-stencil-font text-xl">Avril</h1>

			<Status />

			
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
