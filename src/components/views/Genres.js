import React from 'react';

import {useParams} from 'react-router-dom';

import api from '../../MovieDbRestApi';

import MovieList from './MovieList';

function Genres(props) {

	const { id } = useParams();

	const {getGenres, setPageSubtitle} = props;
	
	const [movies, setMovies] = React.useState(null);
	React.useEffect(() => {
		(async () => {
			const genreId = parseInt(id);
			console.log("genre id", genreId);
			const data = await api.getMoviesByGenreIds([genreId]);
			console.log("movie by genre data", data);
			setMovies(data.results);

			const genres = await getGenres();

			const name = genres.find((genre) => genre.id === genreId)['name'];

			setPageSubtitle("- Genre: " + name);
		})()
	}, [id, getGenres, setPageSubtitle])


	return (
		<MovieList movies={movies} />
	)
}

export default Genres;