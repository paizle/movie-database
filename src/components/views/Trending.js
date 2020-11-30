import React from 'react';

import api from '../../MovieDbRestApi';

import MovieList from './MovieList';

function Trending(props) {

	const [movies, setMovies] = React.useState(null);
	
	const {setPageSubtitle} = props;

	React.useEffect(() => {
		(async () => {
			const data = await api.getTrending();
			console.log("trending movies data", data);
			setMovies(data);
		})()
		setPageSubtitle("- Trending");
	}, [setPageSubtitle])


	return (
		<>
			<MovieList movies={movies} />
		</>
	)
}

export default Trending;