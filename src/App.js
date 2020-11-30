import './index.scss';

import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Trending from './components/views/Trending';
import Genres from './components/views/Genres';
import Certifications from './components/views/Certifications';

import MainMenu from './components/views/menu/MainMenu';

function App() {

	//const [configuration, setConfiguration] = React.useState(null);

	const [pageSubtitle, setPageSubtitle] = React.useState("");

	React.useEffect(() => {
		/*
		if(!configuration) {
			(async()=>{
				const data = await api.getConfig();
				console.log('api configuration', data);
				setConfiguration(data);
			})();
			
		}
		*/
		
	}, []);

	return (
		<Router>
			<header>
				<h1><Link to="/">Movie Database App</Link> {pageSubtitle}</h1>
				<MainMenu />
			</header>
			<main>
				<Switch>
					<Route exact path="/">
						<Trending setPageSubtitle={setPageSubtitle} />
					</Route>
					<Route path="/genres/:id">
						<Genres setPageSubtitle={setPageSubtitle} />
					</Route>
					<Route path="/certifications">
						<Certifications setPageSubtitle={setPageSubtitle} />
					</Route>
				</Switch>
			</main>
			<footer>
				<p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
				<p>
					All movie data is provided courtesy of <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">www.themoviedb.org</a>
				</p>
			</footer>
		</Router>
	);
}

export default App;
